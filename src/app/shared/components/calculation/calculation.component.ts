import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { CardService } from '../../services/card.service';
import { Idata } from '../../models/data';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { BillreceiptComponent } from '../billreceipt/billreceipt.component';

@Component({
  selector: 'app-calculation',
  templateUrl: './calculation.component.html',
  styleUrls: ['./calculation.component.scss']
})
export class CalculationComponent implements OnInit {
   prodarryCal! : Array<Idata> 
   numberofItem  : number = 0
   totalcal  : number = 0
   vattax  : number = 0
   discount  : number = 0
   vattaxvalue : number = 0
   discountvalue  : number = 0
   totalBillAmount : number = 0
    Empty :Array<any>= [];
   
  
  constructor(private _cardservice : CardService,
    private _matdialog : MatDialog) {
       
    
 
   }


  ngOnInit(): void {

       
    this._cardservice.prodCalobservable$
        .subscribe( (res : Array<Idata>) => {
          this.prodarryCal = res
          console.log(this.prodarryCal);
          let totalproduct = 0
          let totalprice = 0
          this.prodarryCal.forEach(ele => {
           totalproduct += ele.count!;
           this.numberofItem = totalproduct;
            totalprice+= ele.price * ele.count!
            this.totalcal = totalprice; 
            ele.totalprice = this.totalcal; 
            ele.totalcount = this.numberofItem;
             this.vattax = this.totalcal;
            
            this.taxAmount()
            this.discoubtAmount()
            this.totalBill()
            
                         
          })

           
        })

   

  }

  taxAmount(){
  
    this.vattax = this.totalcal * (this.vattaxvalue/100)
   }
      
   discoubtAmount(){

    this.discountvalue = this.totalcal * (this.discount/100)
    this.totalBill()

   }

   totalBill(){
    this.totalBillAmount = this.totalcal + this.vattax - this.discount
   }

   onprocess(){
    const dialogConfig = new MatDialogConfig
     dialogConfig.width = "500px"
     dialogConfig.data ={ billArray : this.prodarryCal,
       total:  this.totalBillAmount,
       items : this.numberofItem,
       vattax : this.vattax,
       discount : this.discountvalue,
       totalcal : this.totalcal
     }
    
    const dialogRef = this._matdialog.open(BillreceiptComponent,dialogConfig)
    
         
   }

    
  oncancelled(){
  

    this._cardservice.emptySub.next(this.Empty)
    
  }


}

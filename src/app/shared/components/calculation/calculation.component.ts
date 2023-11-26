import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { CardService } from '../../services/card.service';
import { Idata } from '../../models/data';

@Component({
  selector: 'app-calculation',
  templateUrl: './calculation.component.html',
  styleUrls: ['./calculation.component.scss']
})
export class CalculationComponent implements OnInit {
   prodarryCal! : Array<Idata> 
   numberofItem ! : number
   totalcal ! : number
   vattax ! : number
   discount ! : number

   @ViewChild('vattaxvalue') vattaxvalue !: ElementRef
  constructor(private _cardservice : CardService) {
       
    
 
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
            
            this.vattax = this.totalcal*+this.vattaxvalue
           
            
            console.log(ele.totalcount);
                          
          })

           
        })

        
        

  }





}

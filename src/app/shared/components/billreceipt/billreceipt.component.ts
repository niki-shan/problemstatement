import { Component, Inject, OnInit } from '@angular/core';
import { CardService } from '../../services/card.service';
import { Idata } from '../../models/data';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-billreceipt',
  templateUrl: './billreceipt.component.html',
  styleUrls: ['./billreceipt.component.scss']
})
export class BillreceiptComponent implements OnInit {
  billArray ! : Array<Idata>
  receiptArray ! : Array<Idata>
  totalAmount : number = 0
  itemtotal : number = 0
  vattax : number = 0
  discount : number = 0
  totalbillAmount : number = 0
  totalcal : number = 0
  date :string =  Date() 
  constructor(private _cardservice :CardService,
    @Inject (MAT_DIALOG_DATA) public data:any) { }

  ngOnInit(): void {
     this.receiptArray = this.data.billArray
     this.totalAmount = this.data.total
     this.itemtotal = this.data.items
     this.vattax = this.data.vattax
     this.discount = this.data.discount
     this.totalcal = this.data.totalcal
     this.totalbillAmount = this.data.total
     console.log(this.totalAmount)
     
 

  }

}

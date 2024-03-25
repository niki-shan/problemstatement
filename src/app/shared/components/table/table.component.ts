import { Component, OnInit } from '@angular/core';
import { CardService } from '../../services/card.service';
import { Idata } from '../../models/data';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  prodArray: Array<Idata> = []

  total !: number


  constructor(private _cardservice: CardService) { }


  ngOnInit(): void {
    this._cardservice.ProdSubasobservable$
      .subscribe(res => {

        if (this.prodArray.some(obj => obj.id === res.id)) {
          let index = this.prodArray.findIndex(ele => ele.id === res.id)
          this.prodArray[index].count!++
          // console.log(this.prodArray);


        } else {
          this.prodArray.push({ ...res, count: 1 })



          // console.log(this.prodArray);
        }

        this._cardservice.prodCalobserver(this.prodArray)
        console.log(this.prodArray);


     
          this._cardservice.emptySub.subscribe(res=>{
                this.prodArray = res
          })


      })





  }



  onClick(id: string, value: string,) {
    let getindex = this.prodArray.findIndex(obj => obj.id === id)
    console.log(getindex);

    if (value == 'max') {
      this.prodArray[getindex].count!++
      this.prodArray[getindex].totalcount=this.prodArray[getindex].count!++
      this._cardservice.prodCalobserver(this.prodArray)
 
    }
    else if (value == 'min' && this.prodArray[getindex].count! > 1) {
      this.prodArray[getindex].count!--
      this.prodArray[getindex].totalcount=this.prodArray[getindex].count!--
      this._cardservice.prodCalobserver(this.prodArray)
  
    }


  }

  onDelete(id: string) {
    let getindex = this.prodArray.findIndex(
      obj => obj.id === id)

    let getconfirm = confirm('Are you sure to delete this product')
    if (getconfirm) {
      this.prodArray[getindex].totalcount=this.prodArray[getindex].count!--
      this._cardservice.prodCalobserver(this.prodArray)
      this.prodArray.splice(getindex, 1)
    }


   }




  }





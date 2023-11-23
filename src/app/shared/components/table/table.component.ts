import { Component, OnInit } from '@angular/core';
import { CardService } from '../../services/card.service';
import { Idata } from '../../models/data';
import { count } from 'rxjs';

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
          console.log(this.prodArray);

        } else {
          this.prodArray.push({ ...res, count: 1 })
          console.log(this.prodArray);
        }
         
         
      }) 

        
 


  }

 

  onClick(id: string, value: string,) {
    let getindex = this.prodArray.findIndex(obj => obj.id === id)
      console.log(getindex);
      
    if (value == 'max') {
      this.prodArray[getindex].count!++

    }
    else if (value == 'min' && this.prodArray[getindex].count! > 1) {
      this.prodArray[getindex].count!--
    }


  }

  onDelete(id:string){
    let getindex = this.prodArray.findIndex(obj => obj.id === id)
  
    let getconfirm = confirm('Are you sure to delete this product')
    if(getconfirm){
    this.prodArray.splice(getindex,1)
          
    }

     
    
      
    
       
  }

  // onMinus() {
  //   this.prodArray.forEach(ele=>{
  //     console.log(ele);

  //     if(ele.id && this.numberofitems > 1){
  //       this.numberofitems--
  //     }
  //   })

  // }
  // onPlus() {

  //    this.prodArray.forEach(ele=> {
  //     console.log(ele);

  //        if( ele.id    ){
  //         ele.count++
  //          if(ele.count++ ){
  //         this.total = +this.obj.price*this.obj.count
  //       }



  //         }


  //    });
  // }
}

import { Injectable } from '@angular/core';
import { Idata } from '../models/data';
import { data } from '../const/data';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CardService {
   productArray : Array<Idata> = data

   private prodSub$ : Subject<Idata>=new Subject<Idata>()
   ProdSubasobservable$ = this.prodSub$.asObservable()
  constructor() { }
 

  allData(){
    return this.productArray
  }

  // getalldata(prod : Idata){
  //  this.productArray.push(prod)
  // }

 prodObserver(prod:Idata){
  console.log(prod);
  
   this.prodSub$.next(prod)
  }

  getIdData(id:Idata){
    this.productArray.filter(pId=>{
        
    })
  }

}

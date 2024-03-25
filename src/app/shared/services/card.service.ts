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
   
   private prodsubCal$ : Subject<Array<Idata>>= new Subject<Array<Idata>>()
   prodCalobservable$  = this.prodsubCal$.asObservable()

   emptySub : Subject<Array<any>>= new Subject<Array<any>>()
  constructor() { }
 

  allData(){
    return this.productArray
  }


 prodObserver(prod:Idata){
  console.log(prod);
  
   this.prodSub$.next(prod)
  }

  prodCalobserver(prod:Array<Idata>){
    this.prodsubCal$.next(prod)
  }



  }

  



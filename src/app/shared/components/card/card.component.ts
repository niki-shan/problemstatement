import { Component, OnInit } from '@angular/core';
import { Idata } from '../../models/data';
import { CardService } from '../../services/card.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  prodArrayCard :Array<Idata>=[]

  constructor(private _cardservice : CardService) { }

  ngOnInit(): void {
    this.prodArrayCard = this._cardservice.allData()
  }

  onClick(prod:Idata){
    
        this._cardservice.prodObserver(prod)
        
   
  }

}

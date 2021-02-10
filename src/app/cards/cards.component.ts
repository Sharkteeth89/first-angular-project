import { Component, OnInit } from '@angular/core';
import { Card } from '../card';
import { CARDS } from '../mock-cards';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
  
  card: Card = {
    id: 1,
    name: 'Windstorm',
    description: ""
  };

  selectedCard: Card | undefined; //you can also use !, ? or change tsconfig.json strictPropertyInitialization
  

  cards = CARDS;

  card2: Card = {
    id: 2,
    name: 'Hades',
    description:""

  };
  constructor() { 
    
  }

  onSelect(card: Card): void {
    this.selectedCard = card;
  }

  //Similar to viewDidLoad or onCreate
  ngOnInit(): void {
    
  }

}

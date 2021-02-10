import { Component, OnInit } from '@angular/core';
import { Card } from '../card';
import { CardService } from '../card.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
  cards: Card[];

  card: Card = {
    id: 1,
    name: 'Windstorm',
    description: ""
  };

  selectedCard: Card | undefined; //you can also use !, ? or change tsconfig.json strictPropertyInitialization
  
  //defines a private cardService property and identifies it as a CardService injection site.
  constructor(private cardService: CardService) {}

  onSelect(card: Card): void {
    this.selectedCard = card;
  }

 getCards(): void {
  this.cardService.getCards()
      .subscribe(cards => this.cards = cards);
}

  //Similar to viewDidLoad or onCreate
  ngOnInit() {
  this.getCards();
}

}

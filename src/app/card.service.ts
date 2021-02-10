import { Injectable } from '@angular/core';
import { Card } from './card';
import { CARDS } from './mock-cards';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  constructor(private messageService: MessageService) { }

  /*getCards(): Card[] {
    return CARDS;
  }*/

  getCards(): Observable<Card[]> {
  const cards = of(CARDS);
  this.messageService.add('CardService: fetched cards');
  return cards;
}
}

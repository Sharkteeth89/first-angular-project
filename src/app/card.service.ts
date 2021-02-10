import { Injectable } from '@angular/core';
import { Card } from './card';
import { CARDS } from './mock-cards';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  constructor() { }

  getHeroes(): Card[] {
    return CARDS;
  }
}

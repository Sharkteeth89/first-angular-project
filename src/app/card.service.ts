import { Injectable } from '@angular/core';
import { Card } from './card';
import { CARDS } from './mock-cards';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  // URL which returns list of JSON items (API end-point URL)
  private readonly URL = 'http://localhost:8888/Laravel/card_selling/public/api/card/list';
constructor(private http: HttpClient) { }
// create a method named: resolveItems()
  // this method returns list-of-items in form of Observable
  // every HTTTP call returns Observable object
  resolveCards(): Observable<any> {
    console.log('Request is sent!');
    // Using the POST method
    const headers =  {
      headers: new  HttpHeaders({ 
        'Content-Type': 'application/x-www-form-urlencoded'})
    };
    return this.http.post(this.URL,
    {
      'card_name' : 'Dragon blanco',
    },
    headers)
  }

  getCards(): Observable<any> {
    const headers =  {
      headers: new  HttpHeaders({ 
        'Content-Type': 'application/x-www-form-urlencoded',})
    };
    return this.http.post(this.URL,
    {
      'card_name' : 'Dragon blanco',
    },
    headers)
  }
/*
  getCard(id: number): Observable<Card> {
  // TODO: send the message _after_ fetching the hero
  this.messageService.add(`CardService: fetched card id=${id}`);
  return of(CARDS.find(card => card.id === id));
}
*/
}

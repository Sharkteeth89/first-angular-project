import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardsComponent } from './cards/cards.component';
import { FormsModule } from '@angular/forms';
import { CardDetailComponent } from './card-detail/card-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { MessageService } from './message.service'; // <-- NgModel lives here

@NgModule({
  declarations: [
    AppComponent,
    CardsComponent,
    CardDetailComponent,
    MessagesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }

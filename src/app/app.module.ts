import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MaterialModule} from './material-module';
import {MatNativeDateModule} from '@angular/material/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardsComponent } from './cards/cards.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CardDetailComponent } from './card-detail/card-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { MessageService } from './message.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CardSearchComponent } from './card-search/card-search.component'; // <-- NgModel lives here
import { HttpClientModule } from '@angular/common/http';
import { RegisterUsersComponent } from './register-users/register-users.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import { ExampleCheckboxComponent } from './example-checkbox/example-checkbox.component';



@NgModule({
  declarations: [
    AppComponent,
    CardsComponent,
    CardDetailComponent,
    MessagesComponent,
    DashboardComponent,
    CardSearchComponent,   
    RegisterUsersComponent,
    ExampleCheckboxComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    MatNativeDateModule,    
    BrowserAnimationsModule,
  ],
  
  entryComponents: [RegisterUsersComponent],

  providers: [MessageService],
  
  bootstrap: [AppComponent]
})
export class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { PersonComponent } from './persons/person/person.component';
import { PersonFormComponent } from './persons/person-form/person-form.component';
import {LoggingService} from "./services/logging.service";
import {PersonsService} from "./services/persons.service";
import {AppRoutingModule} from "./app-routing.module";
import { PersonsComponent } from './persons/persons.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonComponent,
    PersonFormComponent,
    PersonsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
  ],
  providers: [
    LoggingService,
    PersonsService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

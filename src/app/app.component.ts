import {Component} from '@angular/core';
import {PersonModel} from './models/person.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Lista de personas';
  persons: PersonModel[] = [
    new PersonModel('Juan', 'Rodriguez'),
    new PersonModel('Laura', 'Prieto'),
    new PersonModel('karla', 'Ramirez')
  ];
  // persons: PersonModel[] = [];
  personAdd(person: PersonModel): void{
    this.persons.push(person);
  }
}

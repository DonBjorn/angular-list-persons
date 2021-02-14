import {Component} from '@angular/core';
import {PersonModel} from './models/person.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Lista de personas';
  nameInput: string = '';
  lastNameInput: string = '';
  persons: PersonModel[] = [
    new PersonModel('Juan', 'Rodriguez'),
    new PersonModel('Laura', 'Prieto'),
    new PersonModel('karla', 'Ramirez')
  ];
  addPerson(): void{
    this.persons.push(new PersonModel(this.nameInput, this.lastNameInput));
    this.nameInput = '';
    this.lastNameInput = '';
  }
}

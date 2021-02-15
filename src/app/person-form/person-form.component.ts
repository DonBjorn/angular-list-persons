import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {PersonModel} from '../models/person.model';

@Component({
  selector: 'app-person-form',
  templateUrl: './person-form.component.html',
  styleUrls: ['./person-form.component.css']
})
export class PersonFormComponent{
  // Para pasar la información al componente padre
  //  El objeto debe ser EventEmitter de @angular/core y tener el type de lo que se emite
  @Output() personCreated = new EventEmitter<PersonModel>();
  @Output() testX = new EventEmitter();
  nameInput: string = '';
  lastNameInput: string = '';
  addPerson(): void{
    const person = new PersonModel(this.nameInput, this.lastNameInput);
    this.nameInput = '';
    this.lastNameInput = '';
    this.personCreated.emit(person);
  }
}

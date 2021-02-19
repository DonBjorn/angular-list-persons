import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {PersonModel} from '../../models/person.model';
import {PersonsService} from "../../services/persons.service";

@Component({
  selector: 'app-person-form',
  templateUrl: './person-form.component.html',
  styleUrls: ['./person-form.component.css'],
})
export class PersonFormComponent {
  // Para pasar la información al componente padre
  //  El objeto debe ser EventEmitter de @angular/core y tener el type de lo que se emite
  // @Output() personCreated = new EventEmitter<PersonModel>();
  nameInput: string = '';
  lastNameInput: string = '';
  // @ViewChild('nameRef') nameInput: ElementRef;
  // @ViewChild('lastNameRef') lastNameInput: ElementRef;

  constructor(
    private personsService: PersonsService
  ) {
    // Los servicios se agregan en el constructor ^
    this.personsService.greet.subscribe(
      (index: number) => alert(`Indice ${index}`)
    );
  }

  addPerson(): void {
    // Se accede al objeto HTML desde this.nameInput.nativeElement
    const person = new PersonModel(
      // this.nameInput.nativeElement.value,
      this.nameInput,
      // this.lastNameInput.nativeElement.value,
      this.lastNameInput
    );
    this.nameInput = '';
    this.lastNameInput = '';
    // this.personCreated.emit(person);
    this.personsService.addPerson(person);
    // this.nameInput.nativeElement.value = '';
    // this.lastNameInput.nativeElement.value = '';
  }
}

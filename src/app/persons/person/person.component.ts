import {Component, Input, OnInit} from '@angular/core';
import {PersonModel} from '../../models/person.model';
import {PersonsService} from "../../services/persons.service";

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent{
  // Atributos que se reciben desde el componente Padre
  @Input() person: PersonModel;
  @Input() index: number;

  constructor(private personsService: PersonsService) {
  }

  sayHi(): void{
    this.personsService.greet.emit(this.index);
  }
}

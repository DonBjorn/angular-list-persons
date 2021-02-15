import {Component, Input, OnInit} from '@angular/core';
import {PersonModel} from '../models/person.model';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent{
  // Atributos que se reciben desde el componente Padre
  @Input() person: PersonModel;
  @Input() index: number;
}

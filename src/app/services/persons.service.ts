import {PersonModel} from "../models/person.model";
import {LoggingService} from "./logging.service";
import {EventEmitter, Injectable} from "@angular/core";

@Injectable()
export class PersonsService{
  persons: PersonModel[] = [
    new PersonModel('Juan', 'Rodriguez'),
    new PersonModel('Laura', 'Prieto'),
    new PersonModel('karla', 'Ramirez')
  ];
  greet = new EventEmitter<number>();
  constructor(private loggingService: LoggingService) {}
  addPerson(person: PersonModel): void{
    this.loggingService.sendMessageToConsole(`Enviamos persona: "${person.name} ${person.lastName}"`);
    this.persons.push(person);
  }
}

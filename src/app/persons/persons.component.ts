import { Component, OnInit } from '@angular/core';
import {PersonModel} from "../models/person.model";
import {PersonsService} from "../services/persons.service";

@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html',
  styleUrls: ['./persons.component.css']
})
export class PersonsComponent implements OnInit {
  persons: PersonModel[] = [];

  constructor(
    private personsService: PersonsService
  ) {}
  ngOnInit(): void {
    this.persons = this.personsService.persons;
  }
  // personAdd(person: PersonModel): void{
  //   this.personsService.addPerson(person);
  // }
}

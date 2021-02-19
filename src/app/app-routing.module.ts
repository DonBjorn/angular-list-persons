import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {PersonsComponent} from "./persons/persons.component";
import {PersonFormComponent} from "./persons/person-form/person-form.component";

const routes: Routes = [
  {path: '', component: PersonsComponent},
  {path: 'personas', component: PersonsComponent},
  {path: 'personas/agregar', component: PersonFormComponent},
  {path: 'personas/:id', component: PersonFormComponent},
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes
    )
  ],
  exports: [ RouterModule ],
})
export class AppRoutingModule { }

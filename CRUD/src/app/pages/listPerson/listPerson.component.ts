import { PersonService } from './../../shared/service/person.service';
import { Person } from './../../shared/models/person.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listPerson',
  templateUrl: './listPerson.component.html',
  styleUrls: ['./listPerson.component.scss']
})
export class ListPersonComponent implements OnInit {
  listOfData: Person[] = [];
  count!: number;
  constructor(private readonly personService: PersonService) { }

  ngOnInit():void {
    this.personService.getAll$().subscribe(
      // Stream receive new data
      res => {
        // Update new listOfData
        this.listOfData = res;

        this.count = res.length;
      },
      // Stream emit an error
      err => {

      },
      // Stream complete
      () => {

      }
    );
  }

  remove(person: Person) {
    this.personService.remove(person.id);
  }

}

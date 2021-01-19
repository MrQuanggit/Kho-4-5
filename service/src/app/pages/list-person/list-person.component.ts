import { Component, OnInit } from '@angular/core';
import { Person } from 'src/app/shared/models/person.model';
import { PersonService } from 'src/app/shared/services/person.service';

@Component({
  selector: 'app-list-person',
  templateUrl: './list-person..component.html',
  styleUrls: ['./list-person..component.scss']
})
export class ListPersonComponent implements OnInit {
  listOfData: Person[] = []

  constructor(private readonly personService: PersonService) {

  }

  ngOnInit(): void {
    this.personService.getAll$().subscribe(
      // Stream receive new data
      res => {
        // Update new listOfData
        this.listOfData = res;

        console.log(res)
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

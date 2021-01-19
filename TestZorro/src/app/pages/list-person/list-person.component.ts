import { PersonService } from './../../shared/service/person.service';
import { Person } from './../../shared/models/person.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-person',
  templateUrl: './list-person.component.html',
  styleUrls: ['./list-person.component.scss']
})
export class ListPersonComponent implements OnInit {
  listOfData: Person[] = [];
  count!: number;

  constructor(private readonly personService: PersonService) { }

  ngOnInit() {
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

  remove(id: number) {
    this.personService.remove(id).subscribe(
      res => {
        this.listOfData = this.listOfData.filter(person => person.id !== id)
      }
    );
  }
}

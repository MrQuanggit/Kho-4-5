import { Component, OnInit } from '@angular/core';
import { Person } from 'src/app/shared/models/person.model';
import { PersonService } from 'src/app/shared/services/person.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-list-form',
  templateUrl: './list-form.component.html',
  styleUrls: ['./list-form.component.scss']
})

export class ListFormComponent implements OnInit {
  count!: number;
  listOfData: Person[] = []
  constructor(
    private readonly personService: PersonService,
    private http: HttpClient,
    ) { }

  ngOnInit(): void {
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

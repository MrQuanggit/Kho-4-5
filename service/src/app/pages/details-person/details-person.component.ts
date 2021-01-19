import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Person } from 'src/app/shared/models/person.model';
import { PersonService } from 'src/app/shared/services/person.service';

@Component({
  selector: 'app-details-person',
  templateUrl: './details-person.component.html',
  styleUrls: ['./details-person.component.scss']
})
export class DetailsPersonComponent implements OnInit {
  person!: Person;

  constructor(
    private location: Location,
    private route: ActivatedRoute,
    private readonly personService: PersonService
  ) { }

  ngOnInit() {
    // Get Id from URL
    const id = +this.route.snapshot.paramMap.get("id");

    this.person = this.personService.getById(id);
  }

  back() {
    this.location.back()
  }
}

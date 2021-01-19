import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Person } from 'src/app/shared/models/person.model';
import { PersonService } from 'src/app/shared/services/person.service';

@Component({
  selector: 'app-detail-person',
  templateUrl: './detail-person.component.html',
  styleUrls: ['./detail-person.component.scss']
})
export class DetailPersonComponent implements OnInit {
  person!: Person|null;

  constructor(
    private location: Location,
    private route: ActivatedRoute,
    private readonly personService: PersonService
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get("id");

    if(!!id) {
    this.person = this.personService.getById(+id);
    }
  }

  back() {
    this.location.back()
  }
}

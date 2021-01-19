import { PersonService } from './../../shared/service/person.service';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detail-person',
  templateUrl: './detail-person.component.html',
  styleUrls: ['./detail-person.component.scss']
})
export class DetailPersonComponent implements OnInit {
  person: any;

  constructor(
    private location: Location,
    private route: ActivatedRoute,
    private readonly personService: PersonService
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get("id");

    if(!!id)
    this.personService.getById(+id).subscribe(
      res => {
        this.person = res
      },
    )
  }

  back() {
    this.location.back()
  }
}

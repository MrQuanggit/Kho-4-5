import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { PersonService } from './../../shared/service/person.service';
import { Person } from './../../shared/models/person.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  person: any;

  constructor(
    private location: Location,
    private route: ActivatedRoute,
    private router: Router,
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

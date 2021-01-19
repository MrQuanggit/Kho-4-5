import { Component, OnInit } from '@angular/core';
import { PersonService } from '../../services/person.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  count!: number;

  constructor(private readonly personService: PersonService) { }

  ngOnInit() {
    this.personService.getAll$().subscribe(
      res => {
        this.count = res.length;
      }
    )
  }

}

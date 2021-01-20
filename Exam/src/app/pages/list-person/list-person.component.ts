import { BookService } from '../../shared/service/book.service';
import { Book } from '../../shared/models/book.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-person',
  templateUrl: './list-person.component.html',
  styleUrls: ['./list-person.component.scss']
})
export class ListPersonComponent implements OnInit {
  count!: number;

  constructor() { }

  ngOnInit() {

  }

}

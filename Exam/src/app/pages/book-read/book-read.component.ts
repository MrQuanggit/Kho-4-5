import { HttpClient } from '@angular/common/http';
import { BookService } from './../../shared/service/book.service';
import { Book } from './../../shared/models/book.model';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-book-read',
  templateUrl: './book-read.component.html',
  styleUrls: ['./book-read.component.scss']
})
export class BookReadComponent implements OnInit {
  listOfData: Book[] = [];
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private readonly bookService: BookService,
    private location: Location) { }

  ngOnInit():void {
    this.bookService.getAll$("false").subscribe(
      res =>  {
        this.listOfData = res
        console.log(res)
      },
      err => {

      },
      () => {

      }
    );
  }

  back() {
    this.location.back()
  }

  unread(id: any) {
    let book : any = {};
    book["read"] = "true";
    this.bookService.patch(id, book).subscribe(
      res => {
        this.bookService.getAll$("false").subscribe(
          res => {
            this.listOfData = res
          }
        )
      }
    );
  }
}

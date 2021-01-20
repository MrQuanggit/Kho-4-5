import { BookService } from './../../shared/service/book.service';
import { Book } from './../../shared/models/book.model';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {
  validateForm!: FormGroup;
  listOfData: Book[] = [];
  constructor(
    private fb: FormBuilder,
    private readonly bookService: BookService,
    private location: Location,
    private route: ActivatedRoute,
    private router: Router,
    ) { }

  ngOnInit():void {
    this.validateForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
    });

    this.bookService.getAll$("true").subscribe(
      res => {
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

  submitForm() {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }

    if(this.validateForm.invalid)
      return

      this.addBook();
      this.validateForm.reset();
  }

  addBook() {
    const {value} = this.validateForm;
    value['read'] = 'true';
    console.log(value)
    this.bookService.add(value).subscribe(
      res => {
        this.bookService.getAll$("true").subscribe(
          res => {
            this.listOfData = res
            // this.router.navigateByUrl("/books");
          }
        )
      }
    )
  }

  read(id: number) {
    let book : any = {};
    book['read'] = "false";
    this.bookService.patch(id, book).subscribe(
      res => {
        this.bookService.getAll$("true").subscribe(
          res => {
            this.listOfData = res
          }
        )
      }
    );

  }
}

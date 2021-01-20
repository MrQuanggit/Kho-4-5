import { Book } from '../models/book.model';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

const API = environment.domain + "books/";

@Injectable({
  providedIn: 'root'
})
export class BookService {

constructor(private http: HttpClient) { }

getAll$(read:string) : Observable<any> {
  return this.http.get(API+"?read="+read);
}

add(book: Book) : Observable<any> {
  return this.http.post(API, book);
}

patch(id: number, book: Book) : Observable<any> {
  return this.http.patch(API+ '/' + id, book);
}
}

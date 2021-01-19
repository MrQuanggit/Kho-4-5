import { Person } from './../models/person.model';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

const API = environment.domain + "person/";

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  constructor(private http: HttpClient) { }

  getAll$() : Observable<any> {
    return this.http.get(API);
  }

  getById(id: number) {
    return this.http.get(API + id);
  }

  add(person: Person) {
    return this.http.post(API, person);
  }

  edit(personId: number, person: Person) {
    return this.http.put(API + personId, person);
  }

  remove(personId: number) {
    return this.http.delete(API + personId);
  }
}

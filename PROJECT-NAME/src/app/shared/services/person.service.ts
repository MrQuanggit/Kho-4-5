import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Person } from '../models/person.model';

const persons: Person[] = [];

const PERSONS_LS_KEY = "PERSONS";

@Injectable({
  providedIn: 'root'
})

export class PersonService {
  private dataSubject: BehaviorSubject<Person[]> = new BehaviorSubject(persons);
  private data: Person[] | any = [];

  customers: any;

  constructor(
    private httpClient: HttpClient
  ) {
    this.getCustomers();
  }

  getAll$() : Observable<Person[]> {
    return this.dataSubject.asObservable();
  }

  getCustomers() {
    return this.httpClient.get('http://localhost:8000/api/persons').subscribe(
      res => {
        this.data = res;
        this.dataSubject.next(this.data)
    });
  }

  getById(personId: number) {
    const person = this.dataSubject.value.find(p => p.id === personId);

    if(person) {
      return {...person};
    }

    return null;
  }


    add(person: Person) {
    this.httpClient.post('http://localhost:8000/api/persons/create', person).subscribe(
        res => {
            this.getCustomers();
        });
  }

  updateStoredList(currentList: Person[]) {
    localStorage.setItem(PERSONS_LS_KEY, JSON.stringify(currentList));
  }

  edit(personId: number, person: Person){

    this.httpClient.put('http://localhost:8000/api/persons/edit/' + personId, person).subscribe(
        res => {
            this.getCustomers();
        });
  }

  remove(personId: number) : void {

    this.httpClient.delete('http://localhost:8000/api/persons/delete/' + personId).subscribe(
        res => {
            this.getCustomers();
        });
  }
}

import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Person } from '../models/person.model';

const mockPersons: Person[] = [
  {
    id: 1,
    name: 'John Black',
    age: 32,
    address: 'New York No. 1 Lake Park'
  },
  {
    id: 2,
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park'
  },
  {
    id: 3,
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park'
  }
];

@Injectable({
  providedIn: 'root'
})
export class PersonService {
  private dataSubject: BehaviorSubject<Person[]> = new BehaviorSubject(mockPersons);
  private data: Person[] = mockPersons;
  constructor() { }

  getAll$() : Observable<Person[]> {
    return this.dataSubject.asObservable();
  }

  getById(personId: number) : Person {
    const person = this.dataSubject.value.find(p => p.id === personId);

    if(person) {
      return {...person};
    }

    return null;
  }

  add(person: Person): void {
    // create new Person from credentials
    const newPerson : Person = {
      ...person,
      id: this.dataSubject.value.length+1
    };

    // get current persons from subject
    const currentList = this.dataSubject.value;

    // push new person into person list
    currentList.push(newPerson);

    // next new value into stream
    this.dataSubject.next(currentList);
  }

  edit(personId: number, person: Person) : Person {
    // Find index of target object
    const indexPerson = this.dataSubject.value.findIndex(p => p.id = personId);

    // Check if not existed, return null
    if(indexPerson < 0)
      return null;

    // Declare new object
    const data : Person = {
      ...person
    };

    // Get list person from stream
    const currentList = this.dataSubject.value;

    // Assign Target Object
    currentList[indexPerson] = data;

    this.dataSubject.next(currentList);

    return person;
  }

  remove(personId: number) : void {
    // Get list person from stream
    let currentList = this.dataSubject.value;

    currentList = currentList.filter(p => p.id !== personId);

    this.dataSubject.next(currentList);
  }
}

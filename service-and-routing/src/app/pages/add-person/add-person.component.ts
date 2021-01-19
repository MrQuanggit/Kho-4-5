import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PersonService } from 'src/app/shared/services/person.service';

@Component({
  selector: 'app-add-person',
  templateUrl: './add-person.component.html',
  styleUrls: ['./add-person.component.scss']
})
export class AddPersonComponent implements OnInit {
  addPersonForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private readonly personService: PersonService
  ) { }

  // Goi 1 lan khi component duoc khoi tao
  ngOnInit() {
    this.addPersonForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      age: [null, [Validators.required, Validators.min(18)]],
      address: [null, [Validators.required, Validators.minLength(10)]]
    })
  }

  submitForm() {
    console.log(this.addPersonForm);
    const {value} = this.addPersonForm;

    this.personService.add(value);
  }
}

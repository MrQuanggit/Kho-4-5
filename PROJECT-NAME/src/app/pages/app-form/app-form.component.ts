import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NzFormTooltipIcon } from 'ng-zorro-antd/form';
import { ActivatedRoute, Router } from '@angular/router';
import { PersonService } from 'src/app/shared/services/person.service';

@Component({
  selector: 'app-app-form',
  templateUrl: './app-form.component.html',
  styleUrls: ['./app-form.component.scss']
})
export class AppFormComponent implements OnInit {
  addPersonForm!: FormGroup;
  isEdit = false;

  title = 'PROJECT-NAME';
  name = new FormControl('');
  validateForm!: FormGroup;
  captchaTooltipIcon: NzFormTooltipIcon = {
    type: 'info-circle',
    theme: 'twotone'
  };

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private location: Location,
    private route: ActivatedRoute,
    private readonly personService: PersonService
    ) {}

  ngOnInit(): void {
    this.addPersonForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      age: [null, [Validators.required, Validators.min(18)]],
      address: [null, [Validators.required]]
    });

    const id = this.route.snapshot.paramMap.get("id");

    if(!!id) {
      this.isEdit = true;
      // Patch value from person into form
      const person = this.personService.getById(+id);

      // Check if person not existed then redirect to error not found
      if(!person) {
        this.router.navigateByUrl("/404")
        return
      }

      this.addPersonForm.patchValue(person);
    }
  }

  submitForm() {

    for (const i in this.addPersonForm.controls) {
      this.addPersonForm.controls[i].markAsDirty();
      this.addPersonForm.controls[i].updateValueAndValidity();
    }

    if(this.addPersonForm.invalid)
      return

      if(this.isEdit)
      this.submitUpdate();
      else
      this.submitRegister();

    this.router.navigate(["/"]);
  }

  back() {
    this.location.back()
  }

  submitRegister() {
    const {value} = this.addPersonForm;
    this.personService.add(value);
  }
  submitUpdate() {
    const {value} = this.addPersonForm;

    const id = this.route.snapshot.paramMap.get("id");

    if(!!id){
    this.personService.edit(+id, value);
  }
}
}

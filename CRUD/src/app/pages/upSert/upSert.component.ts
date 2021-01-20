import { PersonService } from './../../shared/service/person.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NzFormTooltipIcon } from 'ng-zorro-antd/form';
import { Location } from '@angular/common';


@Component({
  selector: 'app-upSert',
  templateUrl: './upSert.component.html',
  styleUrls: ['./upSert.component.scss']
})
export class UpSertComponent implements OnInit {
  validateForm!: FormGroup;
  isEdit = false;
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
  ) { }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      age: [null, [Validators.required, Validators.min(18)]],
      address: [null, [Validators.required]]
    });

    const id = this.route.snapshot.paramMap.get("id");

    if(!!id) {
      this.isEdit = true;
      // Patch value from person into form
      const person = this.personService.getById(+id).subscribe(
        res => {
          this.validateForm.patchValue(res);
        }
      );

      if(!person) {
        this.router.navigateByUrl("/404")
        return
      }
    }
  }

  submitForm() {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }
    if(this.validateForm.invalid)
      return

    if(this.isEdit)
    this.submitUpdate();
    else
    this.submitRegister();

    this.validateForm.reset();
  }

  submitRegister() {
    const {value} = this.validateForm;
    this.personService.add(value).subscribe(
      res => {
        this.router.navigateByUrl("");
      }
    );
  }

  submitUpdate() {
    const {value} = this.validateForm;
    const id = this.route.snapshot.paramMap.get("id");
    if(!!id){
    this.personService.edit(+id, value).subscribe(
      res => {
        this.router.navigateByUrl("");
      }
    );
    }
  }

  back() {
    this.location.back()
  }
}

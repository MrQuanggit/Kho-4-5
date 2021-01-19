
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NzTableModule } from 'ng-zorro-antd/table';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzInputModule } from 'ng-zorro-antd/input';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { UpsertPersonComponent } from './upsert-person.component';

const routes:Routes = [
  {
    path: 'create',
    component: UpsertPersonComponent
  },
  {
    path: ':id/edit',
    component: UpsertPersonComponent
  },
]

@NgModule({
  declarations: [UpsertPersonComponent],
  imports: [
    CommonModule,

    NzTableModule,
    NzDividerModule,
    NzFormModule,
    NzButtonModule,
    NzInputModule,
    ReactiveFormsModule,

    RouterModule.forChild(routes),
  ]
})
export class UpsertPersonModule { }

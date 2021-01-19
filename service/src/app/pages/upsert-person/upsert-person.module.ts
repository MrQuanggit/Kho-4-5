import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UpsertPersonComponent } from './upsert-person.component';
import { RouterModule, Routes } from '@angular/router';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzTableModule } from 'ng-zorro-antd/table';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
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
  declarations: [
    UpsertPersonComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,

    // UI Modules
    NzTableModule,
    NzDividerModule,
    NzFormModule,
    NzButtonModule,
    NzInputModule
  ]
})
export class UpsertPersonModule { }

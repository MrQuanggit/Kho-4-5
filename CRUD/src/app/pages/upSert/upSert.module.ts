import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { UpSertComponent } from './upSert.component';

import { NzTableModule } from 'ng-zorro-antd/table';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzInputModule } from 'ng-zorro-antd/input';
import { ReactiveFormsModule } from '@angular/forms';

const routes:Routes = [
  {
    path: 'create',
    component: UpSertComponent
  },
  {
    path: ':id/edit',
    component: UpSertComponent
  },
]

@NgModule({
  declarations: [
    UpSertComponent,
  ],
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
export class UpSertModule { }

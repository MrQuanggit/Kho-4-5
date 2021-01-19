import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailPersonComponent } from './detail-person.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: ':id',
    component: DetailPersonComponent
  }
]

@NgModule({
  declarations: [DetailPersonComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})

export class DetailPersonModule { }

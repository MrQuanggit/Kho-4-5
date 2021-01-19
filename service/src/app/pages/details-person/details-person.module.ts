import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailsPersonComponent } from './details-person.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: ':id',
    component: DetailsPersonComponent
  }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DetailsPersonComponent]
})
export class DetailsPersonModule { }

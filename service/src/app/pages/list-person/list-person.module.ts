import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListPersonComponent } from './list-person.component';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzInputModule } from 'ng-zorro-antd/input';
import { RouterModule } from '@angular/router';

const routes = [{
  path: '',
  component: ListPersonComponent
}]

@NgModule({
  declarations: [
    ListPersonComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),

    // UI Modules
    NzTableModule,
    NzDividerModule,
    NzFormModule,
    NzButtonModule,
    NzInputModule
  ]
})
export class ListPersonModule { }

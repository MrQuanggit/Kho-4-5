import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListFormComponent } from './list-form.component';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzInputModule } from 'ng-zorro-antd/input';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

const routes = [{
  path: '',
  component: ListFormComponent
}]

@NgModule({
  declarations: [ListFormComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),

    // UI Modules
    NzTableModule,
    NzDividerModule,
    NzFormModule,
    NzButtonModule,
    NzInputModule,
    HttpClientModule
  ]
})
export class ListFormModule { }

import { DetailPersonComponent } from './pages/detail-person/detail-person.component';
import { ListPersonComponent } from './pages/list-person/list-person.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { vi_VN } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import vi from '@angular/common/locales/vi';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NzTableModule } from 'ng-zorro-antd/table';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzInputModule } from 'ng-zorro-antd/input';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: ListPersonComponent
  },
  {
    path: ':id/detail',
    component: DetailPersonComponent
  },
  {
    path: '',
    loadChildren: () => import("./pages/upsert-person/upsert-person.module").then(m => m.UpsertPersonModule)
  },
]

registerLocaleData(vi);

@NgModule({
  declarations: [
    AppComponent,
    ListPersonComponent,
    DetailPersonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NzButtonModule,

    //
    NzTableModule,
    NzDividerModule,
    NzFormModule,
    NzButtonModule,
    NzInputModule,
    ReactiveFormsModule,

    // 
    RouterModule.forRoot(routes),
  ],
  providers: [{ provide: NZ_I18N, useValue: vi_VN }],
  bootstrap: [AppComponent]
})
export class AppModule { }

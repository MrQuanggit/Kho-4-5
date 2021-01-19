/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { UpSertComponent } from './upSert.component';

describe('UpSertComponent', () => {
  let component: UpSertComponent;
  let fixture: ComponentFixture<UpSertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpSertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpSertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

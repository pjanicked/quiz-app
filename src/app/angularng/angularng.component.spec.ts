/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AngularngComponent } from './angularng.component';

describe('AngularngComponent', () => {
  let component: AngularngComponent;
  let fixture: ComponentFixture<AngularngComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularngComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularngComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

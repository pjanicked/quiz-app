/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CodingmcqComponent } from './codingmcq.component';

describe('CodingmcqComponent', () => {
  let component: CodingmcqComponent;
  let fixture: ComponentFixture<CodingmcqComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CodingmcqComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CodingmcqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

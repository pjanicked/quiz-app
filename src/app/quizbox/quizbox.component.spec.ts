/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { QuizboxComponent } from './quizbox.component';

describe('QuizboxComponent', () => {
  let component: QuizboxComponent;
  let fixture: ComponentFixture<QuizboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuizboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

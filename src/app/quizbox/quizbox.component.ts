import { Component, Input, OnInit } from '@angular/core';

import { Question } from '../models/question';

@Component({
  selector: 'app-quizbox',
  templateUrl: './quizbox.component.html',
  styleUrls: ['./quizbox.component.scss']
})
export class QuizboxComponent implements OnInit {

  @Input() question!: Question;
  
  constructor() { }

  ngOnInit() {
  }

}

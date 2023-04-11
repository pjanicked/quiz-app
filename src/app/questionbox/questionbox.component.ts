import { Component, Input, OnInit } from '@angular/core';

import { Question } from '../models/question';

@Component({
  selector: 'app-questionbox',
  templateUrl: './questionbox.component.html',
  styleUrls: ['./questionbox.component.scss']
})
export class QuestionboxComponent implements OnInit {

  @Input() question!: Question;
  
  constructor() { }

  ngOnInit() {
  }

}

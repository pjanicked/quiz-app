import { Component, OnInit } from '@angular/core';

import { DataService } from '../services/data.service';
import { Question } from '../models/question';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-codingmcq',
  templateUrl: './codingmcq.component.html',
  styleUrls: ['./codingmcq.component.scss']
})
export class CodingmcqComponent implements OnInit {
  data: Question[] = [];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.retrieveMcqData();
  }

  retrieveMcqData() {
    this.dataService.getCodingmcqData().pipe(
      map(changes =>
        changes.map(context =>
          (context.payload.doc.data() )
        )
      )
    ).subscribe(result => {
      this.data = result as Question[];
    });
  }

}

import { Component, OnInit } from '@angular/core';

import { DataService } from '../services/data.service';
import { Question } from '../models/question';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-angularng',
  templateUrl: './angularng.component.html',
  styleUrls: ['./angularng.component.scss']
})
export class AngularngComponent implements OnInit {
  data: Question[] = [];
  
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.retrieveAngularData();
  }

  retrieveAngularData() {
    this.dataService.getAngularData().pipe(
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

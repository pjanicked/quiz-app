import { Component, OnInit } from '@angular/core';

import { DataService } from '../services/data.service';
import { Question } from '../models/question';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-csharp',
  templateUrl: './csharp.component.html',
  styleUrls: ['./csharp.component.scss']
})
export class CsharpComponent implements OnInit {
  data: Question[] = [];
  
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.retrieveCsharpData();
  }

  retrieveCsharpData() {
    this.dataService.getCsharpData().pipe(
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

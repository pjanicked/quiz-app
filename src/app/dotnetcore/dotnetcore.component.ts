import { Component, OnInit } from '@angular/core';

import { DataService } from '../services/data.service';
import { Question } from '../models/question';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-dotnetcore',
  templateUrl: './dotnetcore.component.html',
  styleUrls: ['./dotnetcore.component.scss']
})
export class DotnetcoreComponent implements OnInit {
  data: Question[] = [];
  
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.retrieveCDotNetCoreData();
  }

  retrieveCDotNetCoreData() {
    this.dataService.getDotnetcoreData().pipe(
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

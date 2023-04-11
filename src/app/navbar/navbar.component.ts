import { Component, ViewChild } from '@angular/core';

import { BreakpointObserver } from '@angular/cdk/layout';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;
 
 constructor(private observer: BreakpointObserver) {}

 ngAfterViewInit() {
  this.observer.observe(['(max-width: 800px)']).subscribe((res) => {
    if (res.matches) {
      this.sidenav.mode = 'over';
      this.sidenav.close();
    } else {
      this.sidenav.mode = 'side';
      this.sidenav.open();
    }
  });
}

}

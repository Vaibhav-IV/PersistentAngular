import { Component,ViewChild } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'PersistentAngular';
  sideBarOpen = true;  //to chnage the default position of sidebar open or closed
  constructor(private observer: BreakpointObserver) {}

  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;

  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }

  // ngAfterViewInit() {
  //   this.observer.observe(['(max-width: 800px)']).subscribe((res) => {
  //     if (res.matches) {
  //       this.sidenav.mode = 'over';
  //       this.sidenav.close();
  //     } else {
  //       this.sidenav.mode = 'side';
  //       this.sidenav.open();
  //     }
  //   });
  // }
}

import { Component, ViewChild } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'PersistentAngular';
  sideBarOpen = true;  //to chnage the default position of sidebar open or closed
  
  constructor(private observer: BreakpointObserver, private router: Router, public loginAuth: AuthService) { }

  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;

  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }
}

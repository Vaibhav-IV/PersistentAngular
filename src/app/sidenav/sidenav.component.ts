import { Component, OnInit, ViewChild } from '@angular/core';
import { MatAccordion } from '@angular/material/expansion';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  @ViewChild(MatAccordion) accordion!: MatAccordion;

  userRole!: number;
  constructor(public loginAuth: AuthService) { }

  ngOnInit(): void {
    this.userRole = this.loginAuth.getRole();
  }

}

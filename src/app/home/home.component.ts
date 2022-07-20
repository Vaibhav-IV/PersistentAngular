import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { MenuService } from '../services/menu.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  role!: number;

  meetingList: Array<any> = [];


  constructor(private menuService: MenuService, private loginAuth: AuthService) {
    this.role = loginAuth.getRole();
  }

  ngOnInit(): void {
    this.meetingList = this.menuService
      .getMenu()[1].children[0].children;
  }

}

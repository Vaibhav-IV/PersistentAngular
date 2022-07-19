import { Component, OnInit } from '@angular/core';
import { MenuService } from '../services/menu.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  meetingList: Array<any> = [];
  

  constructor(private menuService: MenuService) {
  
   }

  ngOnInit(): void {
    this.meetingList = this.menuService
    .getMenu()[1].children[0].children;
  }

}

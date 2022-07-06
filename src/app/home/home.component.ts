import { Component, OnInit } from '@angular/core';
import { MenuService } from '../services/menu.service';
import { CommonModule } from "@angular/common";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  meetingList: Array<any> = [];
  cardsData!: { title: string, count: number, icon: string }[];

  constructor(private menuService: MenuService) {
    this.cardsData = [
      { title: "registered trainees", count: 2718, icon: "fas fa-users" },
      { title: "enrolled trainees", count: 2321, icon: "fas fa-user-check" },
      { title: "courses", count: 27, icon: "fas fa-book" },
      { title: "annoucements", count: 272, icon: "fas fa-bullhorn" },
      { title: "sessions - 30 days", count: 272727, icon: "fas fa-poll" },
      { title: "unique logins - 30 days", count: 1262, icon: "fas fa-sign-in-alt" },
      { title: "active users - 30 days", count: 1262, icon: "fas fa-check-double" },
    ]
   }

  ngOnInit(): void {
    this.meetingList = this.menuService
    .getMenu()[1].children[0].children;
  }

}

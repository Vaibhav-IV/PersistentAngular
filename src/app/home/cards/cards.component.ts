import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {
  cardsData!: { title: string, count: number, icon: string }[];
  constructor() {
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
  }

}

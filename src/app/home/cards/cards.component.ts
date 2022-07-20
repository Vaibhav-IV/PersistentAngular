import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {
  role!: number;
  teacherCardsData!: { title: string, count: number, icon: string }[];
  studentcardsData1!: { title: string, data: string, icon: string }[];
  studentcardsData!: { title: string, count: number, icon: string }[];
  cardsData!: { title: string, count: number, icon: string }[];
  constructor(public loginAuth: AuthService) {
    this.role = loginAuth.getRole();
    this.cardsData = [
      { title: "registered trainees", count: 2718, icon: "fas fa-users" },
      { title: "enrolled trainees", count: 2321, icon: "fas fa-user-check" },
      { title: "courses", count: 27, icon: "fas fa-book" },
      { title: "annoucements", count: 272, icon: "fas fa-bullhorn" },
      { title: "sessions - 30 days", count: 272727, icon: "fas fa-poll" },
      { title: "unique logins - 30 days", count: 1262, icon: "fas fa-sign-in-alt" },
      { title: "active users - 30 days", count: 1262, icon: "fas fa-check-double" },
    ]
    this.teacherCardsData = [
      { title: "COURSES", count: 0, icon: "fas fa-graduation-cap" },
      { title: "ENROLLED USER", count: 0, icon: "fas fa-user-alt" },
      { title: "ANNOUNCEMENTS", count: 0, icon: "fa fa-bullhorn" },
      { title: "QUERIES PENDIND", count: 0, icon: "fa fa-question-circle" },
    ]
    this.studentcardsData = [
      { title: "COURSES", count: 1, icon: "fas fa-book" },
      { title: "STARTED", count: 0, icon: "far fa-clock" },
      { title: "ACHIEVEMENTS", count: 0, icon: "fa fa-trophy" },
      { title: "ANNOUNCEMENTS", count: 0, icon: "fa fa-bullhorn" },
      { title: "NOTIFICATION", count: 0, icon: "far fa-bell" },
    ]

    this.studentcardsData1 = [
      { title: "LEADERBOARD", data: "RANK:896 POINT:89", icon: "fa fa-star" },
      { title: "LAST LOGIN", data: "8-JUL-2022 03:39PM", icon: "fa fa-sign-out" },
    ]
  }

  ngOnInit(): void {
  }

}

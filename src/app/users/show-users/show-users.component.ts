import { Component, OnInit } from '@angular/core';
import usersData from './MOCK_DATA.json';
import { MatTable } from '@angular/material/table'

interface showUsers {
  UID: number,
  name: string,
  email: string,
  dept: string,
  role: string,
  status: string,
  lastLogin: string;
}

@Component({
  selector: 'app-show-users',
  templateUrl: './show-users.component.html',
  styleUrls: ['./show-users.component.scss']
})
export class ShowUsersComponent implements OnInit {
  users: showUsers[] = usersData;
  displayedColumns: string[] = ["UID", "name", "email", "dept", "role", "status"];

  constructor() {
  }

  ngOnInit(): void {
  }

}

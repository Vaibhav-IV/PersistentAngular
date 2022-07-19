import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { MatSort, Sort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { HttpClient } from '@angular/common/http';

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
  users: any;
  displayedColumns: string[] = ["UID", "name", "email", "dept", "role", "status"];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private _liveAnnouncer: LiveAnnouncer, private http: HttpClient) { }

  ngOnInit(): void {

    //* fetch data from api
    this.http.get<showUsers[]>('http://localhost:3000/usersData').subscribe({
      next: (data) => {
        this.users = new MatTableDataSource<showUsers>(data);

        //* paginator and sorting from material table
        this.users.paginator = this.paginator;
        this.users.sort = this.sort;
      },
      error: (error) => {
        console.log(error);
      }
    });
  }

  //* sorting function
  announceSortChange(sortState: Sort) {
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }

  // * searching function
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.users.filter = filterValue.trim().toLowerCase();
  }


}
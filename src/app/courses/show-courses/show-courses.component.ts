import { Component, OnInit, ViewChild } from '@angular/core';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort, Sort } from '@angular/material/sort';
import { ApiService } from 'src/app/services/api.service';
import { AuthService } from 'src/app/services/auth.service';


interface showCourses {
  date: string,
  code: string,
  till: string,
  name: string,
  students_Enrolled: string;
  instructor: string,
  status: string,
}


@Component({
  selector: 'app-show-courses',
  templateUrl: './show-courses.component.html',
  styleUrls: ['./show-courses.component.scss']
})
export class ShowCoursesComponent implements OnInit {
  role!: number;
  courses: any;
  displayedColumns: string[] = ["code", "name", "date", "till", "instructor", "students_Enrolled", "status"]

  constructor(private _liveAnnouncer: LiveAnnouncer,
    private api: ApiService,
    private loginAuth: AuthService) {
    this.role = loginAuth.getRole();
  }

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngOnInit(): void {
    this.api.getCourses().subscribe({
      next: (data) => {
        this.courses = new MatTableDataSource<showCourses>(data.content);
        this.courses.paginator = this.paginator;
        this.courses.sort = this.sort;
        console.log(data.content)
      },
      error: (error) => {
        console.log(error);
      }
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.courses.filter = filterValue.trim().toLowerCase();
  }

  announceSortChange(sortState: Sort) {

    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }
}
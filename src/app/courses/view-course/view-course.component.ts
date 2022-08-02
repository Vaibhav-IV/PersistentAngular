import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { DialogComponent } from 'src/app/dialog/dialog.component';
import { ApiService } from 'src/app/services/api.service';


@Component({
  selector: 'app-view-course',
  templateUrl: './view-course.component.html',
  styleUrls: ['./view-course.component.scss']
})
export class ViewCourseComponent implements OnInit {

  constructor(public dialog: MatDialog,
    private api: ApiService,) {}

  id: any
  visibiltyy:any = true

  openDialog() {
    this.dialog.open(DialogComponent, {
      height: '400px',
      width:'600px',
    });
  }

  ngOnInit(): void {
    this.api.getCourseDetails(this.id).subscribe({
      next: (data) => {
        console.log(data.content)
      },
      error: (error) => {
        console.log(error);
      }
    })
  }

}

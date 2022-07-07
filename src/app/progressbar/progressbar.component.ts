import { Component, OnInit } from '@angular/core';
import { compileNgModuleDeclarationExpression } from '@angular/compiler/src/render3/r3_module_compiler';
import coursesData from 'src/assets/data.json';

interface CourseData {
  courseName: String;
  enrollments: number;
  completions: Number;

}

@Component({
  selector: 'app-progressbar',
  templateUrl: './progressbar.component.html',
  styleUrls: ['./progressbar.component.scss']
})
export class ProgressbarComponent implements OnInit {

  courses: CourseData[] = coursesData;
  //temp:Number=this.courses[0].enrollments;
  temp: CourseData = this.courses[0];

  constructor() { }

  color: Array<string> = ['divr1', 'divr2', 'divr3', 'divr4', 'divr5'];

  Math = Math;
  sum: number = 0;
  sumArray(): void {
    for (var i = 0; i < this.courses.length; i++) {
      this.sum = this.sum + this.courses[i].enrollments;
    }
  }

  sortArray(): void {
    for (var i = 0; i < this.courses.length - 1; i++) {
      for (var j = i + 1; j < this.courses.length; j++) {
        if (this.courses[i].enrollments < this.courses[j].enrollments) {
          this.temp = this.courses[i];
          this.courses[i] = this.courses[j];
          this.courses[j] = this.temp
        }
      }

    }
  }

  ngOnInit(): void {
    this.sortArray();
    this.sumArray();
    this.color;
  }

}

import { Component, OnInit, ViewChild } from '@angular/core';
import { Chart } from 'chart.js';
import graphdata from '../../json/plotdata.json'
//this is for progress bar
import coursesData from '../../json/progressBarData.json'
interface CourseData {
  courseName: String;
  enrollments: number;
  completions: Number;
}

@Component({
  selector: 'app-plot',
  templateUrl: './plot.component.html',
  styleUrls: ['./plot.component.scss']
})

export class PlotComponent implements OnInit {

  constructor() {}

  ngOnInit()  {
    this.sortArray();
    this.sumArray();
    this.color;
  }

  //start of pot comp ts file
  title="chart";
  canvas: any;
  ctx: any;
  @ViewChild('mychart') mychart:any;

  ngAfterViewInit() {
    this.canvas = this.mychart.nativeElement;
    this.ctx = this.canvas.getContext('2d');

    new Chart(this.ctx, {
      type: 'line',
      data: {
        datasets: [{
          label: 'Logins',
              data:graphdata[0].data,
          backgroundColor: "rgb(115 185 243 / 65%)",
          borderColor: "#007ee7",
          fill: true,
        }
        ],
        labels: graphdata[0].labels
      },
    });
  }

  //end of plot comp

  //start of progressbar

  courses: CourseData[] = coursesData;
  temp: CourseData = this.courses[0];

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

  //end of progressbar

}
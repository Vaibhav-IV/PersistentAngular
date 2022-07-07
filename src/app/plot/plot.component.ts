import { Component, OnInit, ViewChild } from '@angular/core';
import graphdata from 'src/assets/db.json';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-plot',
  templateUrl: './plot.component.html',
  styleUrls: ['./plot.component.scss']
})
export class PlotComponent implements OnInit {

  title="chart";
  constructor() { 
   
  }

  ngOnInit()  {
    
  }

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

}
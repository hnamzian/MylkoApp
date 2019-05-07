import { Component, ViewChild } from "@angular/core";
import { NavController } from "ionic-angular";
import { Chart } from "chart.js";
import { DairyDetailStatsPage } from "../dairy-detail-stats/dairy-detail-stats";

@Component({
  selector: "dairy-stats",
  templateUrl: "dairy-stats.html"
})
export class DairyStatsPage {
  @ViewChild("doughnutCanvas")
  doughnutCanvas;
  @ViewChild("lineCanvas")
  lineCanvas;

  doughnutChart: any;
  lineChart: any;

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    var config = {
      type: "doughnut",
      data: {
        labels: ["Red", "Gray"],
        datasets: [
          {
            data: [67, 33],
            backgroundColor: ["#4a91f2", "#dddd"],
            hoverBackgroundColor: ["#2E90FF", "#ccc"]
          },
          {
            data: [38, 51],
            backgroundColor: ["#00b159", "#dddd"],
            hoverBackgroundColor: ["#2E90FF", "#ccc"]
          }
        ]
      },
      options: {
        cutoutPercentage: 70,
        rotation: 1 * Math.PI,
        circumference: 1 * Math.PI,
        legend: {
          display: false
        },
        elements: {
          arc: {
            borderWidth: 5
          },
          center: {
            display: true,
            text: "Desktop",
            color: "#36A2EB", //Default black
            fontStyle: "Helvetica", //Default Arial
            sidePadding: 15
          }
        }
      }
      // plugins: {
      //     beforeDraw: function(chart) {
      //         var width = chart.chart.width,
      //             height = chart.chart.height,
      //             ctx = chart.chart.ctx;

      //         ctx.restore();
      //         var fontSize = (height / 100).toFixed(1);
      //         ctx.font = fontSize + "em sans-serif";
      //         ctx.textBaseline = "middle";

      //         var text = "2560 Litres",
      //             textX = Math.round((width - ctx.measureText(text).width) / 2),
      //             textY = height / 1.5;

      //         ctx.fillText(text, textX, textY);
      //         ctx.save();
      //     }
      // }
    };
    this.doughnutChart = new Chart(this.doughnutCanvas.nativeElement, config);

    this.lineChart = new Chart(this.lineCanvas.nativeElement, {
      type: "line",
      data: {
        labels: ["1", "2", "3", "4", "5", "6", "7"],
        datasets: [
          {
            label: "My First dataset",
            fill: false,
            lineTension: 0.1,
            backgroundColor: "rgba(75,192,192,0.4)",
            borderColor: "rgba(75,192,192,1)",
            borderCapStyle: "butt",
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: "miter",
            pointBorderColor: "rgba(75,192,192,1)",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "rgba(75,192,192,1)",
            pointHoverBorderColor: "rgba(220,220,220,1)",
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [65, 59, 80, 81, 56, 55, 61],
            spanGaps: false
          }
        ]
      },
      options: {
        legend: {
          display: false
        },
        scales: {
          xAxes: [
            {
              ticks: {
                display: true,
                beginAtZero: true
              },
              gridLines: {
                display: false
              }
            }
          ],
          yAxes: [
            {
              ticks: {
                display: true,
                beginAtZero: true
              },
              gridLines: {
                display: true
              }
            }
          ]
        }
      }
    });
  }

  navToDairyDetailStats() {
    this.navCtrl.push(DairyDetailStatsPage);
  }
}

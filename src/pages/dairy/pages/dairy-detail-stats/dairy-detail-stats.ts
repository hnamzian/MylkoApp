import { Component, ViewChild } from "@angular/core";
import { NavParams, NavController } from "ionic-angular";
import { Chart } from "chart.js";

@Component({
  selector: "dairy-detail-stats",
  templateUrl: "dairy-detail-stats.html"
})
export class DairyDetailStatsPage {
  @ViewChild("barCanvas") barCanvas;

  barChart: any;

  activated;

  constructor() {}

  ionViewDidLoad() {
    this.barChart = new Chart(this.barCanvas.nativeElement, {
      type: "bar",
      data: {
        labels: ["day#1", "day#2", "day#3", "day#4", "day#5", "day#6", "day#7"],
        datasets: [
          {
            label: "Volume",
            data: [2520, 2560, 2550, 2540, 2530, 2510, 2525],
            backgroundColor: [
              "rgba(54, 162, 235, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(54, 162, 235, 0.2)"
            ],
            borderColor: [
              "rgba(54, 162, 235, 1)",
              "rgba(54, 162, 235, 1)",
              "rgba(54, 162, 235, 1)",
              "rgba(54, 162, 235, 1)",
              "rgba(54, 162, 235, 1)",
              "rgba(54, 162, 235, 1)",
              "rgba(54, 162, 235, 1)"
            ],
            borderWidth: 1
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
                display: false,
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
                display: false,
                beginAtZero: true,
                min: 2450,
                max: 2600
              },
              gridLines: {
                display: false
              }
            }
          ]
        }
      }
    });
  }

  changePeriod(ev) {}
}

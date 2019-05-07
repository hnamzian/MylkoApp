import { Component, ViewChild } from "@angular/core";
import { NavParams, NavController } from "ionic-angular";
import { Chart } from "chart.js";

@Component({
  selector: "goat-milking-detail",
  templateUrl: "goat-milking-detail.html"
})
export class GoatMilkingDetail {
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
            data: [4.1, 3.9, 4.05, 4.0, 3.95, 3.89, 4.02],
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
                min: 3.5,
                max: 4.5
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

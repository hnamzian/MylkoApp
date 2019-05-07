import { Component, ViewChild } from "@angular/core";
import { NavController, NavParams } from "ionic-angular";
import { Chart } from "chart.js";

@Component({
  selector: "goats-weight",
  templateUrl: "goats-weight.html"
})
export class GoatsWeightPage {
  constructor(navParams: NavParams, public navCtrl: NavController) {}

  @ViewChild("barCanvas") barCanvas;

  barChart: any;

  activated;

  ionViewDidLoad() {
    this.barChart = new Chart(this.barCanvas.nativeElement, {
      type: "bar",
      data: {
        labels: ["day#1", "day#2", "day#3", "day#4", "day#5", "day#6", "day#7"],
        datasets: [
          {
            label: "Weight",
            data: [30, 30.1, 30.3, 30.45, 30.6, 30.72, 30.84],
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
                min: 29,
                max: 32
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

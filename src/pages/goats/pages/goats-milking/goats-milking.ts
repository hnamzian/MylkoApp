import { Component, ViewChild } from "@angular/core";
import { NavController } from "ionic-angular";
import { Chart } from "chart.js";
import { GoatMilkingDetail } from "../goat-milking-detail/goat-milking-detail";

@Component({
  selector: "goats-milking",
  templateUrl: "goats-milking.html"
})
export class GoatsMilkingPage {
  @ViewChild("doughnutCanvas")
  doughnutCanvas;

  doughnutChart: any;

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
    };
    this.doughnutChart = new Chart(this.doughnutCanvas.nativeElement, config);
  }

  navToGoatMilkingDetial() {
    this.navCtrl.push(GoatMilkingDetail);
  }
}

import { Component } from "@angular/core";
import { NavController, NavParams } from "ionic-angular";

@Component({
  selector: "goats-health",
  templateUrl: "goats-health.html"
})
export class GoatsHealthPage {
  health = {
    age: 10,
    gender: "Female",
    weight: {
      birth: 10,
      sixmonth: 20,
      mature: 32,
      current: 37
    },
    vaccination: {
      vaccinType: "Hepatit",
      vaccinDate: "1/1/2017"
    },
    diseases: "Ebola",
    food: {
      waterAvg: 5.4,
      waterTimes: 6,
      foodAvg: 3,
      foodTimes: 10
    },
    mating: {
      times: 7
    },
    breeding: {
      times: 10
    }
  };

  expandFoodCard: boolean = false;
  expandVaccinCard: boolean = false;
  expandBreedingCard: boolean = false;
  expandWeightCard: boolean = false;

  constructor(navParams: NavParams, public navCtrl: NavController) {}
}

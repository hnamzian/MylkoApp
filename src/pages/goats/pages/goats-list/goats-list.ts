import { Component } from "@angular/core";
import { NavController, NavParams } from "ionic-angular";
import { GoatsDetailsPage } from "../goat-details/goats-details";
import { NewGoatPage } from "../new-goat/new-goat";

@Component({
  selector: "goats-list",
  templateUrl: "goats-list.html"
})
export class GoatsListPage {
  goats = [
    { id: "049873857", weight: 32.5, milkRate: 2.4, age: 2, gender: "ماده" },
    { id: "839545847", weight: 33.1, milkRate: 2.4, age: 3, gender: "ماده" },
    { id: "487874732", weight: 34.3, milkRate: 2.4, age: 3, gender: "ماده" },
    { id: "243564566", weight: 30.1, milkRate: 2.4, age: 9, gender: "ماده" },
    { id: "345465256", weight: 32, milkRate: 0, age: 5, gender: "نر" },
    { id: "028736232", weight: 34.6, milkRate: 0, age: 6, gender: "نر" },
    { id: "395642736", weight: 30.7, milkRate: 0, age: 6, gender: "نر" },
    { id: "340838462", weight: 38, milkRate: 0, age: 4, gender: "نر" }
  ];

  constructor(navParams: NavParams, public navCtrl: NavController) {}

  navToGoatsDetailsPage() {
    this.navCtrl.push(GoatsDetailsPage);
  }

  navToNewGoat() {
    this.navCtrl.push(NewGoatPage);
  }
}

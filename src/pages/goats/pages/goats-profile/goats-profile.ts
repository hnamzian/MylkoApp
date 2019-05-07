import { Component } from "@angular/core";
import { NavController, NavParams } from "ionic-angular";

// ToDo
// birth date; birthdate weight; mother's tagId, mother's milking avg; color;

@Component({
  selector: "goats-profile",
  templateUrl: "goats-profile.html"
})
export class GoatsProfilePage {
  profile = {
    tagId: "398477545",
    race: "Morcia",
    birthdate: "20/09/2017 12:30 AM",
    birthWeight: 10,
    momId: "347875485",
    momRecord: 2.5,
    twines: [{ id: "98457434" }, { id: "97458475" }],
    color: "black"
  };
  constructor(navParams: NavParams, public navCtrl: NavController) {}
}

// 1-Profile
// birthdate weight
// Mom Id
// Mom Record
// Twines
// Twines' status
// Color
// birthdate

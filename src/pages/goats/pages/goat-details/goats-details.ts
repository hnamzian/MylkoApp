import { Component } from "@angular/core";
import { NavController, NavParams } from "ionic-angular";
import { GoatsMilkingPage } from "../goats-milking/goats-milking";
import { GoatsProfilePage } from "../goats-profile/goats-profile";
import { GoatsWeightPage } from "../goats-weight/goats-weight";
import { GoatsWoolPage } from "../goats-wool/goats-wool";
import { GoatsHealthPage } from "../goats-health/goats-health";

@Component({
  selector: "goats-details",
  templateUrl: "goats-details.html"
})
export class GoatsDetailsPage {
  goatsMilkingPage = GoatsMilkingPage;
  goatsProfilePage = GoatsProfilePage;
  goatsWeightPage = GoatsWeightPage;
  goatsWoolPage = GoatsWoolPage;
  goatsHealthPage = GoatsHealthPage;

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

// 2-Health
// Age
// health status
// Vaccins
// diseases
// Food: Water, ...
// breedings
// تعداد مراحلی که ازش برای بارور کردن ماده دامها استفاده شده (اگه نردامه)

// 3-Products
// Average Milk rate
// چندمین روز شیرواری
// Weight
// چندمین روز پرواربندی
// Wool weight
// چندمین روز بعد از پشم چینی

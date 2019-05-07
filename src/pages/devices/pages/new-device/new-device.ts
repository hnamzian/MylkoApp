import { Component } from "@angular/core";
import { NavController, NavParams } from "ionic-angular";

@Component({
  selector: "new-device",
  templateUrl: "new-device.html"
})
export class NewDevicePage {

  constructor(navParams: NavParams, public navCtrl: NavController) {
  }
}

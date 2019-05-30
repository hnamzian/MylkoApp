import { Component } from "@angular/core";
import { NavController } from "ionic-angular";
import { DairyStatsPage } from "../dairy/pages/dairy-stats/dairy-stats";
import { DeviceTypesPage } from "../devices/pages/device-types/device-types";
import { EmployeeListPage } from "../employees/pages/employees-list/employee-list";
import { GoatsListPage } from "../goats/pages/goats-list/goats-list";
import { ProfilePage } from "../user/pages/profile/profile";
import { DairyProfilePage } from "../dairy/pages/dairy-profile/dairy-profile";

@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage {
  constructor(public navCtrl: NavController) {}

  navToDairyStatsPage() {
    this.navCtrl.push(DairyStatsPage);
  }

  navToDeviceListPage() {
    this.navCtrl.push(DeviceTypesPage);
  }

  navToEmployeeListPage() {
    this.navCtrl.push(EmployeeListPage);
  }

  navToGoatsListPage() {
    this.navCtrl.push(GoatsListPage);
  }

  navToProfilePage() {
    this.navCtrl.push(ProfilePage);
  }

  navToDairyProfilePage() {
    this.navCtrl.push(DairyProfilePage);
  }
}

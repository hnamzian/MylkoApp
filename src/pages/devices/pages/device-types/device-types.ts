import { Component } from "@angular/core";
import { NavParams, NavController } from "ionic-angular";
import { DeviceListPage } from "../device-list/device-list";
import { NewDevicePage } from "../new-device/new-device";

@Component({
  selector: "device-types",
  templateUrl: "device-types.html"
})
export class DeviceTypesPage {
  deviceTypes = [
    {
      name: "Central Controller",
      number: 1,
      icon: "../../assets/imgs/server.png"
    },
    { name: "Smart Milking", number: 5, icon: "../../assets/imgs/milking.png" },
    {
      name: "Smart reader",
      number: 4,
      icon: "../../assets/imgs/rfid-reader.png"
    },
    { name: "Smart Tags", number: 4, icon: "../../assets/imgs/price-tag.png" }
  ];

  constructor(navParams: NavParams, public navCtrl: NavController) {}

  navToDeviceList(type) {
    this.navCtrl.push(DeviceListPage, { type });
  }

  navToNewDevice() {
    this.navCtrl.push(NewDevicePage);
  }
}

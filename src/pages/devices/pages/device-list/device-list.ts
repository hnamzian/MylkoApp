import { Component } from "@angular/core";
import { NavParams } from "ionic-angular";

@Component({
  selector: "device-list",
  templateUrl: "device-list.html"
})
export class DeviceListPage {
  centralDevices = [
    {
      id: "C123456",
      name: "Local Server",
      isActive: true,
      firmware_version: "v1.0"
    }
  ];

  milkingDevices = [
    {
      id: "M123456",
      name: "Milking 1",
      isActive: true,
      firmware_version: "v1.0"
    },
    {
      id: "M945788",
      name: "Milking 2",
      isActive: true,
      firmware_version: "v1.0"
    },
    {
      id: "M475387",
      name: "Milking 3",
      isActive: true,
      firmware_version: "v1.0"
    },
    {
      id: "M823740",
      name: "Milking 4",
      isActive: true,
      firmware_version: "v1.0"
    },
    {
      id: "M346538",
      name: "Milking 5",
      isActive: true,
      firmware_version: "v1.0"
    }
  ];

  readerDevices = [
    {
      id: "R475384",
      name: "Reader 1",
      isActive: true,
      firmware_version: "v1.0"
    },
    {
      id: "R993847",
      name: "Reader 2",
      isActive: true,
      firmware_version: "v1.0"
    },
    {
      id: "R304845",
      name: "Reader 3",
      isActive: true,
      firmware_version: "v1.0"
    },
    {
      id: "R234739",
      name: "Reader 4",
      isActive: true,
      firmware_version: "v1.0"
    }
  ];

  tagDevices = [
    {
      id: "845937",
      name: "RFID Reader 1",
      isActive: true,
      firmware_version: "v1.0"
    },
    {
      id: "938475",
      name: "RFID Reader 2",
      isActive: true,
      firmware_version: "v1.0"
    },
    {
      id: "837465",
      name: "RFID Reader 3",
      isActive: true,
      firmware_version: "v1.0"
    },
    {
      id: "343245",
      name: "RFID Reader 4",
      isActive: true,
      firmware_version: "v1.0"
    },
    {
      id: "234565",
      name: "RFID Reader 5",
      isActive: true,
      firmware_version: "v1.0"
    },
    {
      id: "345872",
      name: "RFID Reader 6",
      isActive: true,
      firmware_version: "v1.0"
    }
  ];

  deviceType;
  devices;

  constructor(navParms: NavParams) {
    this.deviceType = navParms.get("type");
    console.log(this.deviceType);
    if (this.deviceType.name === "Central Controller") this.devices = this.centralDevices;
    else if (this.deviceType.name === "Smart Milking") this.devices = this.milkingDevices;
    else if (this.deviceType.name === "Smart reader") this.devices = this.readerDevices;
    else if (this.deviceType.name === "Smart Tags") this.devices = this.tagDevices;
  }
}

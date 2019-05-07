import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { IonicModule } from "ionic-angular";
import { DeviceDetailsPage } from "./pages/device-details/device-details";
import { DeviceListPage } from "./pages/device-list/device-list";
import { DeviceTypesPage } from "./pages/device-types/device-types";
import { NewDevicePage } from "./pages/new-device/new-device";

@NgModule({
  imports: [CommonModule, IonicModule],
  declarations: [DeviceDetailsPage, DeviceListPage, DeviceTypesPage, NewDevicePage],
  entryComponents: [DeviceDetailsPage, DeviceListPage, DeviceTypesPage, NewDevicePage]
})
export class DevicesModule {}

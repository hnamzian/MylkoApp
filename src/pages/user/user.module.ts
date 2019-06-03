import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { IonicModule } from "ionic-angular";
import { ProfilePage } from "./pages/profile/profile";
import { CoreModule } from "../core/core.module";

@NgModule({
  imports: [CommonModule, IonicModule, CoreModule],
  declarations: [ProfilePage],
  entryComponents: [ProfilePage]
})
export class UserModule {}

import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { IonicModule } from "ionic-angular";
import { ProfilePage } from "./pages/profile/profile";

@NgModule({
  imports: [CommonModule, IonicModule],
  declarations: [ProfilePage],
  entryComponents: [ProfilePage]
})
export class UserModule {}

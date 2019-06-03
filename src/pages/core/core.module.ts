import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { IonicModule } from "ionic-angular";
import { AuthHeaderComponent } from "./components/auth-header/auth-header";
import { NavbarHeaderComponent } from "./components/navbar-header/navbar-header";
import { TrashBarCompponent } from "./components/trash-bar/trash-bar";

@NgModule({
  imports: [CommonModule, IonicModule],
  declarations: [AuthHeaderComponent, NavbarHeaderComponent, TrashBarCompponent],
  entryComponents: [TrashBarCompponent],
  exports: [AuthHeaderComponent, NavbarHeaderComponent]
})
export class CoreModule {}

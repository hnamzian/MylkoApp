import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { IonicModule } from "ionic-angular";
import { AuthHeaderComponent } from "./components/auth-header/auth-header";
import { TrashBarCompponent } from "./components/trash-bar/trash-bar";

@NgModule({
  imports: [CommonModule, IonicModule],
  declarations: [AuthHeaderComponent, TrashBarCompponent],
  entryComponents: [TrashBarCompponent],
  exports: [AuthHeaderComponent]
})
export class CoreModule {}

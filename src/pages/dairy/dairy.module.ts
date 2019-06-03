import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { IonicModule } from "ionic-angular";
import { DairyProfilePage } from "./pages/dairy-profile/dairy-profile";
import { DairyDetailStatsPage } from "./pages/dairy-detail-stats/dairy-detail-stats";
import { DairyStatsPage } from "./pages/dairy-stats/dairy-stats";
import { CoreModule } from "../core/core.module";

@NgModule({
  imports: [CommonModule, IonicModule, CoreModule],
  declarations: [DairyProfilePage, DairyStatsPage, DairyDetailStatsPage],
  entryComponents: [DairyProfilePage, DairyStatsPage, DairyDetailStatsPage]
})
export class DairyModule {}

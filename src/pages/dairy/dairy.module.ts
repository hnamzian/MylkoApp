import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { IonicModule } from "ionic-angular";
import { DairyDetailStatsPage } from "./pages/dairy-detail-stats/dairy-detail-stats";
import { DairyStatsPage } from "./pages/dairy-stats/dairy-stats";

@NgModule({
  imports: [CommonModule, IonicModule],
  declarations: [DairyStatsPage, DairyDetailStatsPage],
  entryComponents: [DairyStatsPage, DairyDetailStatsPage]
})
export class DairyModule {}

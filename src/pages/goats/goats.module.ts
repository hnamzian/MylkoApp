import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { IonicModule } from "ionic-angular";
import { GoatsDetailsPage } from "./pages/goat-details/goats-details";
import { GoatMilkingDetail } from "./pages/goat-milking-detail/goat-milking-detail";
import { GoatsHealthPage } from "./pages/goats-health/goats-health";
import { GoatsListPage } from "./pages/goats-list/goats-list";
import { GoatsMilkingPage } from "./pages/goats-milking/goats-milking";
import { GoatsProfilePage } from "./pages/goats-profile/goats-profile";
import { GoatsWeightPage } from "./pages/goats-weight/goats-weight";
import { GoatsWoolPage } from "./pages/goats-wool/goats-wool";
import { NewGoatPage } from "./pages/new-goat/new-goat";

@NgModule({
  imports: [CommonModule, IonicModule],
  declarations: [GoatsDetailsPage, GoatMilkingDetail, GoatsHealthPage, GoatsListPage, GoatsMilkingPage, GoatsProfilePage, GoatsWeightPage, GoatsWoolPage, NewGoatPage],
  entryComponents: [GoatsDetailsPage, GoatMilkingDetail, GoatsHealthPage, GoatsListPage, GoatsMilkingPage, GoatsProfilePage, GoatsWeightPage, GoatsWoolPage, NewGoatPage]
})
export class GoatsModule {}

import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { IonicModule } from "ionic-angular";
import { EmployeeProfilePage } from "./pages/employee-profile/employee-profile";
import { EmployeeListPage } from "./pages/employees-list/employee-list";
import { NewEmployeePage } from "./pages/new-employee/new-employee";
import { CoreModule } from "../core/core.module";

@NgModule({
  imports: [CommonModule, IonicModule, CoreModule],
  declarations: [EmployeeProfilePage, EmployeeListPage, NewEmployeePage],
  entryComponents: [EmployeeProfilePage, EmployeeListPage, NewEmployeePage]
})
export class EmployeesModule {}

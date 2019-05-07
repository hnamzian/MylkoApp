import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { IonicModule } from "ionic-angular";
import { EmployeeProfilePage } from "./pages/employee-profile/employee-profile";
import { EmployeeListPage } from "./pages/employees-list/employee-list";
import { NewEmployeePage } from "./pages/new-employee/new-employee";

@NgModule({
  imports: [CommonModule, IonicModule],
  declarations: [EmployeeProfilePage, EmployeeListPage, NewEmployeePage],
  entryComponents: [EmployeeProfilePage, EmployeeListPage, NewEmployeePage]
})
export class EmployeesModule {}

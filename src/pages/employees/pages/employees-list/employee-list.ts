import { Component, OnInit } from "@angular/core";
import { NavController, NavParams } from "ionic-angular";
import { EmployeeProfilePage } from "../employee-profile/employee-profile";
import { NewEmployeePage } from "../new-employee/new-employee";
import { EmployeesProvider } from "../../../../providers/employees/employees";
import { DairyStorage } from "../../../../storage/dairy";
import { Employee } from "../../../../models/employees";

@Component({
  selector: "employee-list",
  templateUrl: "employee-list.html"
})
export class EmployeeListPage implements OnInit {
  employees: Employee[];

  constructor(
    private navCtrl: NavController,
    private employeesProvider: EmployeesProvider,
    private dairyStorage: DairyStorage
  ) {}

  async ngOnInit() {
    try {
      await this.getEmployees();
    } catch (ex) {
      console.log(ex.message);
    }
  }

  async getEmployees() {
    const dairy = await this._getDairy();
    const employees$ = await this._getEmployees$(dairy.id);
    return new Promise((resolve, reject) => {
      employees$.subscribe(
        result => {
          if (result && result.success) {
            this.employees = result.employees;
            resolve(result.message);
          }
        },
        error => {
          reject(error.error.message);
        }
      );
    });
  }

  navToEmployeeProfile(employee) {
    this.navCtrl.push(EmployeeProfilePage, { employee });
  }

  navToNewEmployee() {
    this.navCtrl.push(NewEmployeePage);
  }

  async _getDairy() {
    const dairy = await this.dairyStorage.getDairy();
    return dairy;
  }

  async _getEmployees$(dairyId) {
    const employees$ = await this.employeesProvider.getEmployees(dairyId);
    return employees$;
  }
}

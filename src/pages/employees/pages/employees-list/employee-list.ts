import { Component, OnInit } from "@angular/core";
import { NavController, NavParams } from "ionic-angular";
import { EmployeeProfilePage } from "../employee-profile/employee-profile";
import { NewEmployeePage } from "../new-employee/new-employee";
import { EmployeesProvider } from "../../../../providers/employees/employees";
import { DairyStorage } from "../../../../storage/dairy";

@Component({
  selector: "employee-list",
  templateUrl: "employee-list.html"
})
export class EmployeeListPage implements OnInit {
  employees = [
    {
      firstName: "اصغر",
      lastName: "حسینی",
      section: "شیردوشی",
      active: true,
      phone: "09302938343",
      hiringDate: "1/1/1398"
    },
    {
      firstName: "فرزام",
      lastName: "بانشی",
      section: "شیردوشی",
      active: false,
      phone: "09384648134",
      hiringDate: "1/1/1398"
    },
    {
      firstName: "پدرام",
      lastName: "کاوه",
      section: "دامپزشک",
      active: true,
      phone: "09387498638",
      hiringDate: "1/1/1398"
    },
    {
      firstName: "فرشید",
      lastName: "رضایی",
      section: "متخصص تغذیه",
      active: true,
      phone: "09384733873",
      hiringDate: "1/1/1398"
    },
    {
      firstName: "علی",
      lastName: "محمودی",
      section: "کارگر ساده",
      active: false,
      phone: "09246348712",
      hiringDate: "1/1/1398"
    }
  ];

  constructor(
    private navCtrl: NavController,
    private employeesProvider: EmployeesProvider,
    private dairyStorage: DairyStorage
  ) {}

  async ngOnInit() {
    await this.getEmployees();
  }

  async getEmployees() {
    const dairy = await this._getDairy();
    await this._getEmployees(dairy.id);
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

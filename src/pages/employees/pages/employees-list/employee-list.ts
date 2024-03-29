import { Component } from "@angular/core";
import { NavController, NavParams } from "ionic-angular";
import { EmployeeProfilePage } from "../employee-profile/employee-profile";
import { NewEmployeePage } from "../new-employee/new-employee";

@Component({
  selector: "employee-list",
  templateUrl: "employee-list.html"
})
export class EmployeeListPage {
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
    },
  ];

  constructor(navParams: NavParams, public navCtrl: NavController) {}

  navToEmployeeProfile(employee) {
    this.navCtrl.push(EmployeeProfilePage, { employee });
  }

  navToNewEmployee() {
    this.navCtrl.push(NewEmployeePage);
  }
}

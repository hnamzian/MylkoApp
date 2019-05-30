import { Component, OnInit } from "@angular/core";
import { NavController, NavParams } from "ionic-angular";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Employee } from "../../../../models/employees";
import { EmployeesProvider } from "../../../../providers/employees/employees";

@Component({
  selector: "employee-profile",
  templateUrl: "employee-profile.html"
})
export class EmployeeProfilePage implements OnInit {
  employeeForm: FormGroup;
  employee: Employee;

  constructor(
    navParams: NavParams,
    private navCtrl: NavController,
    private formBuilder: FormBuilder,
    private employeesProvider: EmployeesProvider
  ) {
    this.employee = navParams.get("employee");
  }

  ngOnInit() {
    this._setEmployeeForm(this.employee);
  }

  updateProfile() {}

  _setEmployeeForm(employee: Employee) {
    this.employeeForm = this.formBuilder.group({
      firstName: [employee.firstName, Validators.required],
      lastName: [employee.lastName, Validators.required],
      mobile: [employee.mobile, Validators.required],
      email: [employee.email],
      hiringDate: [employee.hiringDate, Validators.required]
    });
  }
}

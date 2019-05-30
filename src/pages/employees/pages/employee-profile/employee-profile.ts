import { Component, OnInit } from "@angular/core";
import { NavController, NavParams } from "ionic-angular";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Employee } from "../../../../models/employees";

@Component({
  selector: "employee-profile",
  templateUrl: "employee-profile.html"
})
export class EmployeeProfilePage implements OnInit {
  employeeForm: FormGroup;
  employee: Employee;

  constructor(
    navParams: NavParams,
    public navCtrl: NavController,
    public formBuilder: FormBuilder
  ) {
    this.employee = navParams.get("employee");
    // console.log(this.employee);
  }

  ngOnInit() {
    this.employeeForm = this.formBuilder.group({
      firstName: [this.employee.firstName, Validators.required],
      lastName: [this.employee.lastName, Validators.required],
      mobile: [this.employee.phone, Validators.required],
      email: [this.employee.email],
      hiringDate: [this.employee.hiringDate, Validators.required]
    });
  }

  updateProfile() {}
}

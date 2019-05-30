import { Component } from "@angular/core";
import { NavController, NavParams } from "ionic-angular";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "new-employee",
  templateUrl: "new-employee.html"
})
export class NewEmployeePage {
  employeeForm: FormGroup;

  constructor(
    navParams: NavParams,
    public navCtrl: NavController,
    public formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this._initEmployeeForm();
  }

  _initEmployeeForm() {
    this.employeeForm = this.formBuilder.group({
      firstName: ["", Validators.required],
      lastName: ["", Validators.required],
      mobile: ["", Validators.required],
      email: [""],
      hiringDate: ["", Validators.required]
    });
  }

  saveProfile() {}
}

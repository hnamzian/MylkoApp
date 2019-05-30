import { Component } from "@angular/core";
import { NavController, NavParams } from "ionic-angular";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Employee } from "../../../../models/employees";

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
      position: [""],
      mobile: ["", Validators.required],
      email: [""],
      hiringDate: ["", Validators.required]
    });
  }

  _getEmployeeForm() {
    return {
      firstName: this.employeeForm.get("firstName").value || "",
      lastName: this.employeeForm.get("lastName").value || "",
      position: this.employeeForm.get("position").value || "",
      mobile: this.employeeForm.get("mobile").value || "",
      email: this.employeeForm.get("email").value || "",
      hiringDate: this.employeeForm.get("hiringDate").value || ""
    } as Employee;
  }

  addEmployee() {}
}

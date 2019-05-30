import { Component } from "@angular/core";
import { NavController, NavParams } from "ionic-angular";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Employee } from "../../../../models/employees";
import { EmployeesProvider } from "../../../../providers/employees/employees";
import { DairyStorage } from "../../../../storage/dairy";

@Component({
  selector: "new-employee",
  templateUrl: "new-employee.html"
})
export class NewEmployeePage {
  employeeForm: FormGroup;

  constructor(
    private navCtrl: NavController,
    private formBuilder: FormBuilder,
    private dairyStorage: DairyStorage
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

  async _getDairy() {
    const dairy = await this.dairyStorage.getDairy();
    return dairy;
  }

  addEmployee() {
    const employee = this._getEmployeeForm();
  }
}

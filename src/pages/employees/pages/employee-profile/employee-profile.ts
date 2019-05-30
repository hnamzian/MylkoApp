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

  async updateProfile() {
    const employee = {
      id: this.employee.id,
      DairyId: this.employee.DairyId,
      ...this._getEmployeeForm()
    };
    const update$ = await this.employeesProvider.updateEmployee(employee);
    update$.subscribe(console.log);
  }

  _setEmployeeForm(employee: Employee) {
    this.employeeForm = this.formBuilder.group({
      firstName: [employee.firstName, Validators.required],
      lastName: [employee.lastName, Validators.required],
      position: [employee.position],
      mobile: [employee.mobile, Validators.required],
      email: [employee.email],
      hiringDate: [employee.hiringDate, Validators.required]
    });
  }

  _getEmployeeForm() {
    return {
      firstName: this.employeeForm.get("firstName").value,
      lastName: this.employeeForm.get("lastName").value,
      position: this.employeeForm.get("position").value,
      mobile: this.employeeForm.get("mobile").value,
      email: this.employeeForm.get("email").value,
      hiringDate: this.employeeForm.get("hiringDate").value
    } as Employee;
  }
}

import { Component, OnInit } from "@angular/core";
import { NavController, NavParams, Toast, ToastController, PopoverController } from "ionic-angular";
import { EmployeeProfilePage } from "../employee-profile/employee-profile";
import { NewEmployeePage } from "../new-employee/new-employee";
import { EmployeesProvider } from "../../../../providers/employees/employees";
import { DairyStorage } from "../../../../storage/dairy";
import { Employee } from "../../../../models/employees";
import { TrashBarCompponent } from "../../../core/components/trash-bar/trash-bar";

@Component({
  selector: "employee-list",
  templateUrl: "employee-list.html"
})
export class EmployeeListPage implements OnInit {
  employees: Employee[];

  toast: Toast;

  constructor(
    private navCtrl: NavController,
    private popoverCtrl: PopoverController,
    private employeesProvider: EmployeesProvider,
    private dairyStorage: DairyStorage,
    private toastCtrl: ToastController
  ) {}

  async ngOnInit() {
    try {
      await this.getEmployees();
    } catch (ex) {
      this.showToast(ex.message);
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

  removeEmployee(employee: Employee) {
    const trashBarPopover = this.popoverCtrl.create(
      TrashBarCompponent,
      {},
      { cssClass: "trashBarPopover" }
    );
    trashBarPopover.present();
    trashBarPopover.onDidDismiss(async action => {
      if (action && action.remove) {
        const remove$ = await this.employeesProvider.removeEmployee(employee.id, employee.DairyId);
        remove$.subscribe(console.log);
      }
    });
  }

  async _getDairy() {
    const dairy = await this.dairyStorage.getDairy();
    return dairy;
  }

  async _getEmployees$(dairyId) {
    const employees$ = await this.employeesProvider.getEmployees(dairyId);
    return employees$;
  }

  showToast(message) {
    this.toast = this.toastCtrl.create({
      message: message,
      position: "bottom",
      duration: 2000,
      cssClass: "toast"
    });
    this.toast.present();
  }

  hideToast() {
    this.toast.dismiss();
  }
}

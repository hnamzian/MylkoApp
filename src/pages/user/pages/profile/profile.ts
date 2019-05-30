import { Component, OnInit } from "@angular/core";
import { NavController, NavParams, ToastController, Toast } from "ionic-angular";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { AdminProvider } from "../../../../providers/admin/admin";
import { ADMIN } from "../../../../models/admin";

@Component({
  selector: "profile-page",
  templateUrl: "profile.html"
})
export class ProfilePage implements OnInit {
  profileForm: FormGroup;
  admin: ADMIN;

  toast: Toast;

  constructor(
    navParams: NavParams,
    public navCtrl: NavController,
    public toastCtrl: ToastController,
    public formBuilder: FormBuilder,
    public adminProvider: AdminProvider
  ) {}

  async ngOnInit() {
    this._initProfileForm();
    await this._getAdmin();
    this._setProfileForm(this.admin);
  }

  async updateProfile() {
    let admin = { id: this.admin.id, ...this._getProfileForm() };
    await this._updateAdmin(admin);
  }

  _initProfileForm() {
    this.profileForm = this.formBuilder.group({
      firstName: ["", Validators.required],
      lastName: ["", Validators.required],
      mobile: ["", Validators.required],
      email: [""],
      address: ["", Validators.required]
    });
  }

  _setProfileForm(admin) {
    this.profileForm.setValue({
      firstName: admin.firstName,
      lastName: admin.lastName,
      mobile: admin.mobile,
      email: admin.email,
      address: admin.address
    });
  }

  _getProfileForm() {
    return {
      firstName: this.profileForm.get("firstName").value || "",
      lastName: this.profileForm.get("lastName").value || "",
      mobile: this.profileForm.get("mobile").value || "",
      email: this.profileForm.get("email").value || "",
      address: this.profileForm.get("address").value || ""
    } as ADMIN;
  }

  async _getAdmin() {
    const admin$ = await this.adminProvider.getAdmin();
    return new Promise((resolve, reject) => {
      admin$.subscribe(
        result => {
          if (result && result.success) {
            this.admin = result.admin;
            resolve(this.admin);
          } else if (result && !result.success) {
            console.log(result.message);
            reject(result.message);
          }
        },
        error => {
          console.log(error);
          reject(error);
        }
      );
    });
  }

  async _updateAdmin(admin) {
    const update$ = await this.adminProvider.updateAdmin(admin);
    return new Promise((resolve, reject) => {
      update$.subscribe(
        result => {
          if (result && result.success) {
            this.admin = result.admin;
            resolve("Update Successful")
          } else if (result && !result.success) {
            reject(result.message);
          }
        },
        error => {
          reject(error.error);
        }
      );
    })
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

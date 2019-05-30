import { Component, OnInit } from "@angular/core";
import { NavController, NavParams } from "ionic-angular";
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

  constructor(
    navParams: NavParams,
    public navCtrl: NavController,
    public formBuilder: FormBuilder,
    public adminProvider: AdminProvider
  ) {}

  async ngOnInit() {
    this.profileForm = this.formBuilder.group({
      firstName: ["", Validators.required],
      lastName: ["", Validators.required],
      mobile: ["", Validators.required],
      email: [""],
      address: ["", Validators.required]
    });

    await this._getAdmin();
  }

  updateProfile() {}

  _setProfileForm(admin) {
    this.profileForm.setValue({
      firstName: admin.firstName,
      lastName: admin.lastName,
      mobile: admin.mobile,
      email: admin.email,
      address: admin.address
    });
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
}

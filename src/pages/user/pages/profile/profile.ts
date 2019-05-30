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

  async _getAdmin() {
    const admin$ = await this.adminProvider.getAdmin();
    admin$.subscribe(console.log);
  }
}

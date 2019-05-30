import { Component, OnInit } from "@angular/core";
import { NavController, NavParams } from "ionic-angular";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { AdminProvider } from "../../../../providers/admin/admin";

@Component({
  selector: "profile-page",
  templateUrl: "profile.html"
})
export class ProfilePage implements OnInit {
  profileForm: FormGroup;
  user = {
    firstName: "جعفر",
    lastName: "بانشی",
    dairyName: "دامداری دام انشان",
    mobile: "09306103749",
    email: "",
    address: "بانش"
  };

  constructor(
    navParams: NavParams,
    public navCtrl: NavController,
    public formBuilder: FormBuilder,
    public adminProvider: AdminProvider
  ) {}

  async ngOnInit() {
    await this._getAdmin();
    this.profileForm = this.formBuilder.group({
      firstName: [this.user.firstName, Validators.required],
      lastName: [this.user.lastName, Validators.required],
      dairyName: [this.user.dairyName, Validators.required],
      mobile: [this.user.mobile, Validators.required],
      email: [this.user.email],
      address: [this.user.address, Validators.required]
    });
  }

  updateProfile() {}

  async _getAdmin() {
    const admin$ = await this.adminProvider.getAdmin();
    admin$.subscribe(console.log);
  }
}

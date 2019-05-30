import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { DairyProvider } from "../../../../providers/dairy/dairy";
import { Dairy } from "../../../../models/dairy";
import { Toast, ToastController } from "ionic-angular";

@Component({
  selector: "dairy-profile",
  templateUrl: "dairy-profile.html"
})
export class DairyProfilePage implements OnInit {
  dairyProfileForm: FormGroup;
  dairy: Dairy;

  toast: Toast;

  constructor(
    private formBuilder: FormBuilder,
    private toastCtrl: ToastController,
    private dairyProvider: DairyProvider
  ) {}

  async ngOnInit() {
    this._initDairyProfileForm();

    const message = await this._getDairy();
    this.showToast(message);
  }

  _initDairyProfileForm() {
    this.dairyProfileForm = this.formBuilder.group({
      dairyName: ["", Validators.required],
      address: ["", Validators.required],
      dairyMan: ["", Validators.required]
    });
  }

  async _getDairy() {
    const dairies$ = await this.dairyProvider.getDairies();
    return new Promise(resolve => {
      dairies$.subscribe(
        result => {
          if (result && result.success) {
            this.dairy = result.dairies[0];
            resolve(result.message);
          }
        },
        error => {
          resolve(error.error.message);
        }
      );
    });
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

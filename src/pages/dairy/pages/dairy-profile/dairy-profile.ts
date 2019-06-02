import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { DairyProvider } from "../../../../providers/dairy/dairy";
import { Dairy } from "../../../../models/dairy";
import { Toast, ToastController } from "ionic-angular";
import { DairyStorage } from "../../../../storage/dairy";

@Component({
  selector: "dairy-profile",
  templateUrl: "dairy-profile.html"
})
export class DairyProfilePage implements OnInit {
  dairyProfileForm: FormGroup;
  dairy = {} as Dairy;

  toast: Toast;

  constructor(
    private formBuilder: FormBuilder,
    private toastCtrl: ToastController,
    private dairyProvider: DairyProvider,
    private dairyStorage: DairyStorage
  ) {}

  async ngOnInit() {
    this._initDairyProfileForm();

    const message = await this._getDairy();
    this.showToast(message);

    await this.dairyStorage.setDairy(this.dairy);

    this._setProfileForm(this.dairy);
  }

  async updateDairy() {
    const dairy = { id: this.dairy.id, ...this._getDairyProfileForm() };

    let updateMessage;
    if (dairy.id) updateMessage = await this._updateDairy(dairy);
    else updateMessage = await this._addDairy(dairy);

    await this.dairyStorage.setDairy(this.dairy);

    this.showToast(updateMessage);
  }

  _initDairyProfileForm() {
    this.dairyProfileForm = this.formBuilder.group({
      dairyName: ["", Validators.required],
      address: ["", Validators.required]
    });
  }

  _setProfileForm(dairy) {
    this.dairyProfileForm.setValue({
      dairyName: dairy.name || "",
      address: dairy.address || ""
    });
  }

  _getDairyProfileForm() {
    return {
      name: this.dairyProfileForm.get("dairyName").value || "",
      address: this.dairyProfileForm.get("address").value || ""
    } as Dairy;
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

  async _updateDairy(dairy: Dairy) {
    let update$ = await this.dairyProvider.updateDairy(dairy);
    return new Promise(resolve => {
      update$.subscribe(
        result => {
          if (result && result.success) {
            this.dairy = result.dairy;
            resolve(result.message);
          }
        },
        error => {
          resolve(error.error.message);
        }
      );
    });
  }

  async _addDairy(dairy: Dairy) {
    let add$ = await this.dairyProvider.addDairy(dairy);
    return new Promise(resolve => {
      add$.subscribe(
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

import { Component } from "@angular/core";
import { NavParams, ToastController, Toast } from "ionic-angular";

@Component({
  selector: "check-verification-code",
  templateUrl: "check-verification-code.html"
})
export class CheckVerificationCodePage {
  mobile;

  toast: Toast;

  constructor(public navParams: NavParams, public toastCtrl: ToastController) {
    // just for dev mode
    const code = this.navParams.get("code");
    this.showToast(code);

    this.mobile = this.navParams.get("mobile");
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

  dismissToast() {
    this.toast.dismiss();
  }
}

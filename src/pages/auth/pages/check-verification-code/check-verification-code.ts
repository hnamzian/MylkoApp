import { Component } from "@angular/core";
import { NavController, NavParams, ToastController, Toast } from "ionic-angular";
import { RegisterPage } from "../register/register";

@Component({
  selector: "check-verification-code",
  templateUrl: "check-verification-code.html"
})
export class CheckVerificationCodePage {
  mobile;

  codeInput0;
  codeInput1;
  codeInput2;
  codeInput3;
  codeInput4;
  codeInput5;

  timer = 59;
  interval;

  toast: Toast;

  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController) {
    // just for dev mode
    const code = this.navParams.get("code");
    this.showToast(code);

    this.mobile = this.navParams.get("mobile");
  }

  nextCode(nextElement: HTMLElement) {
    nextElement.focus();
  }

  isNumber(value) {
    return true;
  }

  startCountdown() {
    this.interval = setInterval(() => {
      if (this.timer > 0) {
        this.timer--;
        return;
      }
      this.navCtrl.push(RegisterPage);
      clearInterval(this.interval);
    }, 1000);
  }

  stopCountdown() {
    clearInterval(this.interval);
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

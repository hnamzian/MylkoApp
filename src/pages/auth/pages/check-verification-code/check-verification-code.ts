import { Component } from "@angular/core";
import { NavController, NavParams, ToastController, Toast } from "ionic-angular";
import { AuthProvider } from "../../../../providers/auth";
import { TokenStorage } from "../../../../storage/token/token";

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

  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController, public authProvider: AuthProvider, public tokenStorage: TokenStorage) {
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

  catCodes() {
    let code = this.codeInput0.toString() + this.codeInput1.toString() + this.codeInput2.toString() + this.codeInput3.toString() + this.codeInput4.toString() + this.codeInput5.toString();
    return code;
  }

  async checkCode() {
    const code = this.catCodes();

    let $ = await this.authProvider.verifySMSToken(code);

    $.subscribe(async result => {
      if (result) {
        console.log(result);        
      } else {
        console.log(result.message);
      }
    });

    this.stopCountdown();
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

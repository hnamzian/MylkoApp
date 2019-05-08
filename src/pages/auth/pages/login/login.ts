import { Component, OnInit } from "@angular/core";
import { NavController, ToastController, Toast } from "ionic-angular";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { CheckVerificationCodePage } from "../check-verification-code/check-verification-code";
import { AuthProvider } from "../../../../providers/auth";
import { TokenStorage } from "../../../../storage/token/token"

@Component({
  selector: "login-page",
  templateUrl: "login.html"
})
export class LoginPage implements OnInit {
  headerImageUrl = "../../assets/imgs/car-login.png";
  headerTitle = "ثبت نام";

  registerForm: FormGroup;

  toast: Toast;

  constructor(public navCtrl: NavController, public formBuilder: FormBuilder, public toastCtrl: ToastController, public authProvider: AuthProvider, public tokenStorage: TokenStorage) {}

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      mobileNumber: ["", [Validators.required, Validators.minLength(10), Validators.maxLength(10)]]
    });
  }

  navToLoginPage() {
    this.navCtrl.push(LoginPage);
  }

  async getSMSToken() {
    const mobile = this.registerForm.get("mobileNumber").value;
    this.authProvider.getSMSToken(mobile).subscribe(
      async result => {
        console.log(result);
        if (result && result.success) {
          await this.tokenStorage.setSMSToken(result.smsToken);
          return this.navCtrl.push(CheckVerificationCodePage, { mobile, code: result.smsCode });
        } else if (result && !result.success) {
          this.showToast(result.message);
        }
      },
      error => this.showToast("خطا در  برقراری ارتباط")
    );
  }

  formErrorCheck() {
    console.log(this.registerForm.get("mobileNumber"));

    const message = this.registerForm.get("mobileNumber").hasError("required")
      ? "شماره همراه الزامی است"
      : this.registerForm.get("mobileNumber").hasError("minlength")
      ? "شماره همراه نامعتبر است"
      : this.registerForm.get("mobileNumber").hasError("maxlength")
      ? "شماره همراه نامعتبر است"
      : "خطا";
    return message;
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

import { Component, OnInit } from "@angular/core";
import { NavController, ToastController, Toast } from "ionic-angular";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { LoginPage } from "../login/login";
import { CheckVerificationCodePage } from "../check-verification-code/check-verification-code";
import { SMSProvider } from "../../../../providers/sms";
import { TokenStorage } from "../../../../storage/token/token";

@Component({
  selector: "register-page",
  templateUrl: "register.html"
})
export class RegisterPage implements OnInit {
  headerImageUrl = "../../assets/imgs/car-login.png";
  headerTitle = "ثبت نام";

  registerForm: FormGroup;

  constructor(public navCtrl: NavController, public formBuilder: FormBuilder, public smsProvider: SMSProvider, public tokenStorage: TokenStorage) {}

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
    this.smsProvider.getSMSToken(mobile).subscribe(async result => {
      if (result && result.success) {
        await this.tokenStorage.setSMSToken(result.smsToken);
        this.navCtrl.push(CheckVerificationCodePage, { mobile, token: result.smsToken });
      } else if (result && !result.success) {
        console.log(result.message);
      }
      console.log("خطا در  برقراری ارتباط");
    });
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
}

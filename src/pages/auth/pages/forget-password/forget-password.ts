import { Component, OnInit } from "@angular/core";
import { NavController, ToastController, Toast } from "ionic-angular";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { LoginPage } from "../login/login";
import { CheckVerificationCodePage } from "../check-verification-code/check-verification-code";

@Component({
  selector: "forget-password",
  templateUrl: "forget-password.html"
})
export class ForgetPasswordPage implements OnInit {
  headerTitle = "فراموشی رمز عبور";

  fgPassForm: FormGroup;

  constructor(public navCtrl: NavController, public formBuilder: FormBuilder) {}

  ngOnInit() {
    this.fgPassForm = this.formBuilder.group({
      mobileNumber: ["", [Validators.required, Validators.minLength(10), Validators.maxLength(10)]]
    });
  }

  navToLoginPage() {
    this.navCtrl.push(LoginPage);
  }

  getSMSToken() {}

  formErrorCheck() {
    console.log(this.fgPassForm.get("mobileNumber"));

    const message = this.fgPassForm.get("mobileNumber").hasError("required")
      ? "شماره همراه الزامی است"
      : this.fgPassForm.get("mobileNumber").hasError("minlength")
      ? "شماره همراه نامعتبر است"
      : this.fgPassForm.get("mobileNumber").hasError("maxlength")
      ? "شماره همراه نامعتبر است"
      : "خطا";
    return message;
  }
}

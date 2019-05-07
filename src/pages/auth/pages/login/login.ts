import { Component, OnInit } from "@angular/core";
import { NavController, ToastController, Toast } from "ionic-angular";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { RegisterPage } from "../register/register";
import { ForgetPasswordPage } from "../forget-password/forget-password";

@Component({
  selector: "login-page",
  templateUrl: "login.html"
})
export class LoginPage implements OnInit {
  headerTitle = "حساب کاربری";

  loginForm: FormGroup;

  constructor(public navCtrl: NavController, public formBuilder: FormBuilder) {}

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      mobileNumber: ["", [Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
      password: ["", [Validators.required, Validators.minLength(3)]]
    });
  }

  navToRegisterPage() {
    this.navCtrl.push(RegisterPage);
  }

  navToForgetPasswordPage() {
    this.navCtrl.push(ForgetPasswordPage);
  }

  loginUser() {}

  formErrorCheck() {
    const message = this.loginForm.get("mobileNumber").hasError("required")
      ? "شماره همراه الزامی است"
      : this.loginForm.get("mobileNumber").hasError("minlength")
      ? "شماره همراه نامعتبر است"
      : this.loginForm.get("mobileNumber").hasError("maxlength")
      ? "شماره همراه نامعتبر است"
      : this.loginForm.get("password").hasError("required")
      ? "رمز عبور الزامی است"
      : "خطا";
    return message;
  }
}

import { Component, OnInit } from "@angular/core";
import { NavController, ToastController, Toast } from "ionic-angular";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { LoginPage } from "../login/login";
import { CheckVerificationCodePage } from "../check-verification-code/check-verification-code";

@Component({
  selector: "register-page",
  templateUrl: "register.html"
})
export class RegisterPage implements OnInit {
  headerImageUrl = "../../assets/imgs/car-login.png";
  headerTitle = "ثبت نام";

  registerForm: FormGroup;

  toast: Toast;

  constructor(public navCtrl: NavController, public toastCtrl: ToastController, public formBuilder: FormBuilder) {}

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      mobileNumber: ["", [Validators.required, Validators.minLength(10), Validators.maxLength(10)]]
    });
  }

  navToLoginPage() {
    this.navCtrl.push(LoginPage);
  }

  getSMSToken() {
    
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

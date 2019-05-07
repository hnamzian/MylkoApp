import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { IonicModule } from "ionic-angular";
import { RegisterPage } from "./pages/register/register";
import { LoginPage } from "./pages/login/login";
import { ForgetPasswordPage } from "./pages/forget-password/forget-password";
import { CheckVerificationCodePage } from "./pages/check-verification-code/check-verification-code";
import { CoreModule } from "../core/core.module";

@NgModule({
  imports: [CommonModule, IonicModule, CoreModule],
  declarations: [RegisterPage, LoginPage, ForgetPasswordPage, CheckVerificationCodePage],
  entryComponents: [RegisterPage, LoginPage, ForgetPasswordPage, CheckVerificationCodePage]
})
export class AuthModule {}

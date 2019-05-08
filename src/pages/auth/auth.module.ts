import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { IonicModule } from "ionic-angular";
import { RegisterPage } from "./pages/register/register";
import { LoginPage } from "./pages/login/login";
import { CheckVerificationCodePage } from "./pages/check-verification-code/check-verification-code";
import { CoreModule } from "../core/core.module";

@NgModule({
  imports: [CommonModule, IonicModule, CoreModule],
  declarations: [RegisterPage, LoginPage, CheckVerificationCodePage],
  entryComponents: [RegisterPage, LoginPage, CheckVerificationCodePage]
})
export class AuthModule {}

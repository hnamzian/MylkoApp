import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { IonicModule } from "ionic-angular";
import { LoginPage } from "./pages/login/login";
import { CheckVerificationCodePage } from "./pages/check-verification-code/check-verification-code";
import { CoreModule } from "../core/core.module";

@NgModule({
  imports: [CommonModule, IonicModule, CoreModule],
  declarations: [LoginPage, CheckVerificationCodePage],
  entryComponents: [LoginPage, CheckVerificationCodePage]
})
export class AuthModule {}

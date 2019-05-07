import { Component } from "@angular/core";
import { NavParams } from "ionic-angular";

@Component({
  selector: "check-verification-code",
  templateUrl: "check-verification-code.html"
})
export class CheckVerificationCodePage {
  mobile;

  constructor(public navParams: NavParams) {
    // just for dev mode
    const code = this.navParams.get("code");

    this.mobile = this.navParams.get("mobile");

    console.log(this.mobile, code);
  }
}

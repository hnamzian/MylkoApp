import { Component } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: "dairy-profile",
  templateUrl: "dairy-profile.html"
})
export class DairyProfilePage {
  dairyProfileForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  _initDairyProfileForm() {
    this.dairyProfileForm = this.formBuilder.group({
      name: ["", Validators.required],
      address: ["", Validators.required],
      dairyMan: ["", Validators.required]
    });
  }
}

import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: "dairy-profile",
  templateUrl: "dairy-profile.html"
})
export class DairyProfilePage implements OnInit {
  dairyProfileForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this._initDairyProfileForm();
  }

  _initDairyProfileForm() {
    this.dairyProfileForm = this.formBuilder.group({
      dairyName: ["", Validators.required],
      address: ["", Validators.required],
      dairyMan: ["", Validators.required]
    });
  }
}

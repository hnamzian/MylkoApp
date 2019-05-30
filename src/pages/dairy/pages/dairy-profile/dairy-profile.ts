import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { DairyProvider } from "../../../../providers/dairy/dairy";
import { Dairy } from "../../../../models/dairy";

@Component({
  selector: "dairy-profile",
  templateUrl: "dairy-profile.html"
})
export class DairyProfilePage implements OnInit {
  dairyProfileForm: FormGroup;
  dairy: Dairy;

  constructor(private formBuilder: FormBuilder, private dairyProvider: DairyProvider) {}

  async ngOnInit() {
    this._initDairyProfileForm();
    await this._getDairy();
  }

  _initDairyProfileForm() {
    this.dairyProfileForm = this.formBuilder.group({
      dairyName: ["", Validators.required],
      address: ["", Validators.required],
      dairyMan: ["", Validators.required]
    });
  }

  async _getDairy() {
    const dairies$ = await this.dairyProvider.getDairies();
    dairies$.subscribe(console.log);
  }
}

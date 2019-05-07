import { Component } from "@angular/core";
import { NavController, NavParams } from "ionic-angular";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "new-goat",
  templateUrl: "new-goat.html"
})
export class NewGoatPage {
  goatForm: FormGroup;

  constructor(navParams: NavParams, public navCtrl: NavController, public formBuilder: FormBuilder) {}

  ngOnInit() {
    this.goatForm = this.formBuilder.group({
      globalId: ["", Validators.required],
      birthDate: ["", Validators.required],
      birthWeight: ["", Validators.required],
      ancestor: ["", Validators.required]
    });
  }

  updateProfile() {}
}

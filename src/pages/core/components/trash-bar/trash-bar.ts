import { Component } from "@angular/core";
import { ViewController } from "ionic-angular/navigation/view-controller";

@Component({
  selector: "trash-bar",
  templateUrl: "trash-bar.html"
})
export class TrashBarCompponent {

  constructor(public viewCtrl: ViewController) {
  }

  remove() {
    this.viewCtrl.dismiss({remove: true})
  }

}

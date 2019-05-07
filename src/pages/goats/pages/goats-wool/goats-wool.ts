import { Component } from "@angular/core";
import { NavController, NavParams } from "ionic-angular";

@Component({
  selector: "goats-wool",
  templateUrl: "goats-wool.html"
})
export class GoatsWoolPage {
  woolEntries = [
    {tagId: '9384785', weight: 3.2, date:'1/1/2017'},
    {tagId: '9384785', weight: 3.5, date:'1/4/2017'},
    {tagId: '9384785', weight: 3.3, date:'1/7/2017'},
    {tagId: '9384785', weight: 2.8, date:'1/10/2017'},
  ];
  constructor(navParams: NavParams, public navCtrl: NavController) {}
}

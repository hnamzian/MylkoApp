import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "navbar-header",
  templateUrl: "navbar-header.html"
})
export class NavbarHeaderComponent {
  @Input() title;
  @Output() navBack = new EventEmitter();

  navBackward() {
    this.navBack.emit();
  }
}

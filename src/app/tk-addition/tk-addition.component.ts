import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tk-addition',
  templateUrl: './tk-addition.component.html',
  styleUrls: ['./tk-addition.component.css']
})
export class TkAdditionComponent {

  toggle = true;
  status = "Enable";

  enableDisableRule() {
    this.toggle = !this.toggle;
    this.status = this.toggle ? "Enable" : "Disable";
  }
}

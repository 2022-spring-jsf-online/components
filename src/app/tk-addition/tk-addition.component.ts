import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tk-addition',
  templateUrl: './tk-addition.component.html',
  styleUrls: ['./tk-addition.component.css']
})
export class TkAdditionComponent implements OnInit {

  export class AppComponent {
    toggle = true;
    status = "Enable";

    enableDisableRule(job) {
      this.toggle = !this.toggle;
      this.status = this.toggle ? "Enable" : "Disable";
    }
  }

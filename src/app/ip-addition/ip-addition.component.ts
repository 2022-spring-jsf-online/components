import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ip-addition',
  templateUrl: './ip-addition.component.html',
  styleUrls: ['./ip-addition.component.css']
})
export class IpAdditionComponent implements OnInit {
  modes: String[] = ['light', 'dark'];
  modeNumber: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  toggleSlide () {
    this.modeNumber = this.modeNumber === 0 ? 1 : 0;
  }

}

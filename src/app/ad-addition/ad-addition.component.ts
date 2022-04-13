import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ad-addition',
  templateUrl: './ad-addition.component.html',
  styleUrls: ['./ad-addition.component.css']
})
export class AdAdditionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

numberOne = 1;
numberTwo = 2.20462;
total = 0;

add = () => this.total = this.numberOne * this.numberTwo;

}

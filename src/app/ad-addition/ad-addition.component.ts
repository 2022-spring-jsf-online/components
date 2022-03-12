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

numberOne = 10;
numberTwo = 90;
total = 100;

add = () => this.total = this.numberOne + this.numberTwo;

}

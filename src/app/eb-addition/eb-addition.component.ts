import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eb-addition',
  templateUrl: './eb-addition.component.html',
  styleUrls: ['./eb-addition.component.css']
})
export class EbAdditionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  numberOneAdd = 0;
  numberOneSub = 0;
  numberOneDiv = 0;
  numberOneMult = 0;

  numberTwoAdd = 0;
  numberTwoSub = 0;
  numberTwoDiv = 0;
  numberTwoMult = 0;
  
  totalAdd = 0;
  totalSub = 0;
  totalDiv = 0;
  totalMult = 0;

  add = () => this.totalAdd = this.numberOneAdd + this.numberTwoAdd;

  subtract = () => this.totalSub = this.numberOneSub - this.numberTwoSub;

  divide = () => this.totalDiv = this.numberOneDiv / this.numberTwoDiv;

  multiply = () => this.totalMult = this.numberOneMult * this.numberTwoMult;

  


}

import { Component, OnInit } from '@angular/core';
import { AmComponentService } from '../am-component.service'

export interface Toppings {
  PickOne: string;
  PickTwo: string;
  PickThree: string;
}

const TOPPING_ARRAY: Toppings[] = [
  {PickOne: 'pepperoni', PickTwo: 'ham', PickThree: 'sausage'},
  {PickOne: 'pineapple', PickTwo: 'bacon', PickThree: 'tomato'},
  {PickOne: 'onion', PickTwo: 'green pepper', PickThree: 'black olives'},
  {PickOne: 'extra cheese', PickTwo: 'extra sauce', PickThree: 'mushrooms'}
];

@Component({
  selector: 'app-am-component',
  templateUrl: './am-component.component.html',
  styleUrls: ['./am-component.component.css']
})

export class AmComponentComponent implements OnInit {

  constructor(
    private amComponentSvc: AmComponentService
  ) { }

  displayedColumns: string[] = ['PickOne', 'PickTwo', 'PickThree'];
  columnsToDisplay: string[] = this.displayedColumns.slice();
  data: Toppings[] = TOPPING_ARRAY;

  ngOnInit(): void {}
  
  shuffle() {
    let currentIndex = this.columnsToDisplay.length;
    while (0 !== currentIndex) {
      let randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
    
        // Swap
        let temp = this.columnsToDisplay[currentIndex];
        this.columnsToDisplay[currentIndex] = this.columnsToDisplay[randomIndex];
        this.columnsToDisplay[randomIndex] = temp;
    }
  }
}
  


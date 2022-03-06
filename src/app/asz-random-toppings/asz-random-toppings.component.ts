import { Component, OnInit } from '@angular/core';
import { RandomToppingsService } from '../random-toppings.service';


interface RandomToppingDisplay {
  name: string;  
}


@Component({
  selector: 'app-asz-random-toppings',
  templateUrl: './asz-random-toppings.component.html',
  styleUrls: ['./asz-random-toppings.component.css']
})
export class AszRandomToppingsComponent implements OnInit {

  // Dependency injection
  constructor(
    private randomToppingSvc: RandomToppingsService
  ) { }

  availableToppings: RandomToppingDisplay[] = [];

  ngOnInit(): void {

    const pt = this.randomToppingSvc.getRandomToppingsFromTheCloud();
    console.log(pt);

    this.availableToppings = pt.map(
      x => ({
        ...x
      })
    );
  }

  topping = "";

  get randomTopping() {    
    let randomTopping = Math.floor(Math.random() * this.availableToppings.length) + 1;
    return this.availableToppings[randomTopping].name    
    ;
  }
  
  showRandomTopping = () => this.topping = this.randomTopping;

}

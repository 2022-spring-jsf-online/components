import { Component, OnInit } from '@angular/core';
import { PizzaService } from '../pizza.service';

// interface are named in Pascal case, will property are named in camel case
interface PizzaToppingDisplay{ 
  name:string;
  price:number;
  checked:boolean;
}

@Component({
  selector: 'app-pizza-toppings',
  templateUrl: './pizza-toppings.component.html',
  styleUrls: ['./pizza-toppings.component.css']
})
export class PizzaToppingsComponent implements OnInit {

  //Magic DI (Dependency injection)
  constructor(private pizzaSvc:PizzaService
    ) { 

    }
    availablePizzaToppings: PizzaToppingDisplay[] = [];

  ngOnInit(): void {
    const pt = this.pizzaSvc.getPizzaToppingFromTheCloud();
    console.log(pt);
    
    // Transforming pt data to add checked property using map function
    this.availablePizzaToppings = pt.map(x => ({
      ...x
      ,checked: false
    })
    );
    console.log(this.availablePizzaToppings);
  }
  get totalPrice(){
    return this.availablePizzaToppings
    .filter(x=> x.checked)
    .reduce((acc,x) => acc +x.price
      , 0
    )
  } 
  checkAll = () => this.availablePizzaToppings = this.availablePizzaToppings.map(x => ({
    ...x, checked:true
  })
  );
  unCheckAll = () => this.availablePizzaToppings = this.availablePizzaToppings.map(x => ({
    ...x, checked:false
  })
  );

  // calculateTotal = () => {
  //   this.totalPrice = this.availablePizzaToppings
  //   .filter(x => x.checked)
  //   .reduce(
  //     (acc,x) => acc + x.price
  //   , 0
  //   )
  // }

}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PizzaService {
  constructor() { }

  getPizzaToppingFromTheCloud(){
    // We pretend me make webservice call here
    const toppingFromWeb = [
      {
        name: 'Olives'
        , price: 2.25
      }
      ,  {
        name: 'Peperoni'
        , price: 2.5
      }
      ,  {
        name: 'Saucage'
        , price: 1.25
      }
    ];
    return toppingFromWeb;
  }
}

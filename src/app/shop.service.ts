import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShopService {

  constructor() { }

    getShoppingCartItems() {
        const theCart = [
            {
                item: "book",
                quantity: 1
            },
            {
                item: "coffee mug",
                quantity: 1
            },
            {
                item: "pillow",
                quantity: 1
            }
        ];
        
        return theCart;
    }
}

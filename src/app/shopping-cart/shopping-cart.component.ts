import { Component, OnInit } from '@angular/core';
import { ShopService } from '../shop.service';
@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  constructor(
      private shopSvc: ShopService
  ) { }

  ngOnInit(): void {
      const sc = this.shopSvc.getShoppingCartItems();
      console.log(sc); 
  }

}

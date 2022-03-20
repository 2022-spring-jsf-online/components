import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PizzaToppingsComponent } from './pizza-toppings/pizza-toppings.component';

import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSlideToggle, MatSlideToggleModule } from '@angular/material/slide-toggle';
import { IpAdditionComponent } from './ip-addition/ip-addition.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { RcRandomNumberComponent } from './rc-random-number/rc-random-number.component';
import { TjsMultiplicationComponent } from './tjs-multiplication/tjs-multiplication.component';
import { AmComponentComponent } from './am-component/am-component.component';


@NgModule({
  declarations: [
    AppComponent,
    IpAdditionComponent,
    ShoppingCartComponent,
    PizzaToppingsComponent,
    TjsMultiplicationComponent,
    PizzaToppingsComponent,
    ShoppingCartComponent,
    PizzaToppingsComponent,
    TjsMultiplicationComponent,
    RcRandomNumberComponent,
    AmComponentComponent
  ],
  imports: [
    BrowserModule
    , FormsModule
    , BrowserAnimationsModule
    , MatCardModule
    , MatButtonModule
    , MatCheckboxModule
    , MatSlideToggleModule
    , MatIconModule
    , MatFormFieldModule
    , MatInputModule
    , MatTableModule
    , MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

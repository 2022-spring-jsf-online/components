import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PizzaToppingsComponent } from './pizza-toppings/pizza-toppings.component';

import {Component, OnInit} from '@angular/core';
import { FormsModule } from '@angular/forms';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { RcRandomNumberComponent } from './rc-random-number/rc-random-number.component';
import { TjsMultiplicationComponent } from './tjs-multiplication/tjs-multiplication.component';
import { EbAdditionComponent } from './eb-addition/eb-addition.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [
    AppComponent
    , ShoppingCartComponent
    , PizzaToppingsComponent
    , TjsMultiplicationComponent
    , RcRandomNumberComponent
    , EbAdditionComponent
  ],
  imports: [
    BrowserModule
    , FormsModule
    , BrowserAnimationsModule
    , MatCardModule
    , MatButtonModule
    , MatCheckboxModule
    , MatInputModule
    , MatFormFieldModule
    , MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

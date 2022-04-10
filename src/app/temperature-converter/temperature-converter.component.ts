import { convertActionBinding } from '@angular/compiler/src/compiler_util/expression_converter';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-temperature-converter',
  templateUrl: './temperature-converter.component.html',
  styleUrls: ['./temperature-converter.component.css']
})
export class TemperatureConverterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  tempC = 0;
  //Method for temperature conversion into Fahrenheit
  convertTemp() {
    return (this.tempC * 1.8) + 32;
    //console.log((this.tempC * 1.8) + 32);
  }
  get tempF() {
    return this.convertTemp();
  } 
  
  
}

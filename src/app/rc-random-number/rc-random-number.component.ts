import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-rc-random-number',
    templateUrl: './rc-random-number.component.html',
    styleUrls: ['./rc-random-number.component.css']
})
export class RcRandomNumberComponent implements OnInit {

    constructor() { }

    min = 0;
    max = 100;
    randomNumber = 0;

    ngOnInit(): void {
    }

    generate = () => this.randomNumber =
            Math.floor(Math.random() * (this.max - this.min + 1) + this.min);

}

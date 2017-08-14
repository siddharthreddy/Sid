import { Component, OnInit } from '@angular/core';
 
@Component({
  selector: 'header',
  templateUrl: '/src/components/header/header'
})

export class HeaderComponent implements OnInit {

    headerText: string;
    logoSrc: string

    constructor() {}

    ngOnInit() {
        this.headerText = "BHOOMI";
        this.logoSrc = './images/blue-abstract.jpg';
    }

}
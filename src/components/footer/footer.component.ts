import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'footer',
    templateUrl: '/src/components/footer/footer'
})

export class FooterComponent implements OnInit {

    headerText: string;
    logoSrc: string;

    constructor() { }

    ngOnInit() {
        this.headerText = 'SID';
        this.logoSrc = './images/blue-abstract.jpg';
    }

}
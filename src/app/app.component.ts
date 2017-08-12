import { Component, OnInit } from 'angular2/core';
 
@Component({
  selector: 'app',
  templateUrl: '/src/app/app'
})

export class AppComponent implements OnInit { 

    constructor() {};

    ngOnInit(): void {
        this.main();
    };

    getRandomeHelloText(): string {
        let welcomeArray: string[] = ['Hello', 'Bonjour', 'Hola', 'Namaste', 'Ola', 'Guten Tag', 'Ciao', 'Salaam'];
        return '<< '  + welcomeArray[Math.floor(Math.random() * welcomeArray.length)] + ' >>';
    };

    main(): void {

        let ohyes: number = 1;
        let frames: number = 10;

        var nameFiller = document.getElementById('name');

        setInterval(function() {
            nameFiller.innerHTML = this.getRandomeHelloText();
        }.bind(this), 1000);

        setInterval(function() {
            document.body.id = "b"+ohyes;
            ohyes++;
            if(ohyes === frames) { ohyes = 1; }
        }, 1000);
    };

}
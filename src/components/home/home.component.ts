import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  templateUrl: '/src/components/home/home'
})

export class HomeComponent implements OnInit { 

    showHome: boolean = true;
    randomTextInterval: number;
    randomColorInterval: number;

    constructor(private router: Router) {
        console.info('home component found');
    };

    ngOnInit(): void {
        this.main();
    };

    getRandomeHelloText(): string {
        let welcomeArray: string[] = ['Hello', 'Bonjour', 'Hola', 'Namaste', 'Ola', 'Guten Tag', 'Ciao', 'Salaam'];
        return '<i class="fa fa-arrow-circle-o-left"></i> '  + welcomeArray[Math.floor(Math.random() * welcomeArray.length)] + ' <i class="fa fa-arrow-circle-o-right"></i>';
    };

    main(): void {

        let ohyes: number = 1;
        let frames: number = 10;

        this.randomTextInterval = setInterval(function() {
            var nameFiller = document.getElementById('name');
            nameFiller.innerHTML = this.getRandomeHelloText();
        }.bind(this), 1000);

        this.randomColorInterval = setInterval(function() {
            document.body.id = "b"+ohyes;
            ohyes++;
            if(ohyes === frames) { ohyes = 1; }
        }, 1000);
    };

    public loadAppHome(): void {
        this.showHome = false;
        //console.info(this.refreshIntervalId, this.refreshIntervalId1);
        clearInterval(this.randomTextInterval);
        clearInterval(this.randomColorInterval);
        //document.body.id = "b12";
        this.router.navigate(['/landing']);
    };

}
import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app',
  templateUrl: '/src/app/app'
})

export class AppComponent implements OnInit {

constructor(private router: Router) {
    console.log('app component called');
};

    ngOnInit(): void {};

}

// export class AppComponent implements OnInit { 

//     showHome: boolean = true;

//     constructor(private router: Router) {};

//     ngOnInit(): void {
//         this.main();
//     };

//     getRandomeHelloText(): string {
//         let welcomeArray: string[] = ['Hello', 'Bonjour', 'Hola', 'Namaste', 'Ola', 'Guten Tag', 'Ciao', 'Salaam'];
//         return '<< '  + welcomeArray[Math.floor(Math.random() * welcomeArray.length)] + ' >>';
//     };

//     main(): void {

//         let ohyes: number = 1;
//         let frames: number = 10;

//         setInterval(function() {
//             var nameFiller = document.getElementById('name');
//             nameFiller.innerHTML = this.getRandomeHelloText();
//         }.bind(this), 1000);

//         setInterval(function() {
//             document.body.id = "b"+ohyes;
//             ohyes++;
//             if(ohyes === frames) { ohyes = 1; }
//         }, 1000);
//     };

//     public loadAppHome(): void {
//         this.showHome = false;
//         this.router.navigate(['/landing']);
//     };

// }
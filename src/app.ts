import * as _ from 'lodash'

import { test } from './test'

function getRandomeHelloText() {
    let welcomeArray: string[] = ['Hello', 'Bonjour', 'Hola', 'Namaste', 'Ola', 'Guten Tag', 'Ciao', 'Salaam'];
    return '<< '  + welcomeArray[Math.floor(Math.random() * welcomeArray.length)] + ' >>';
}


function main() {
    
    let int: number = 1;
    let frames: number = 10;

    var nameFiller = document.getElementById('name');

    console.info(_.isNull(null));
    test.showMessage('my message');

    setInterval(function() {
        nameFiller.innerHTML = getRandomeHelloText();
    }, 1000);

    setInterval(function() {
        document.body.id = "b"+int;
        int++;
        if(int === frames) { int = 1; }
    }, 1000);
}

document.addEventListener('DOMContentLoaded', main);
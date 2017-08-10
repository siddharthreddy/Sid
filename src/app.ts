function getRandomeHelloText() {
    let welcomeArray: string[] = ['Hello', 'Bonjour', 'Hola', 'Namaste', 'Ola', 'Guten Tag', 'Ciao', 'Salaam'];
    return '<< '  + welcomeArray[Math.floor(Math.random() * welcomeArray.length)] + ' >>';
}


function main() {
    var nameFiller = document.getElementById('name');
    setInterval(function() {
        nameFiller.innerHTML = getRandomeHelloText();
    }, 750);
}
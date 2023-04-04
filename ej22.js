const readlineSync = require('readline-sync');

let phrase = readlineSync.question("Ingrese una frase: ");


for(let i = 0 ; i < 4; i++){
    console.log(" ".repeat(i * 4) + phrase);
}
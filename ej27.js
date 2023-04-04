const readlineSync = require('readline-sync');

let number = readlineSync.questionInt("Ingrese elnumero: ");

for (let i = 0; i <= 10; i++){
    console.log(`${number} x ${i} = ${number * i}`);
}
const readlineSync = require('readline-sync');
const myArray = [];
for (let i = 0 ; i < 5 ; i++){
    let number = parseInt(readlineSync.question("Ingrese un numero : "));
    myArray.push(number);
}

myArray.sort();

console.log(` El numero mas pequeno de la serie es ${myArray[0]}`);
console.log(` El numero mas grande de la serie es ${myArray[myArray.length -1]}`);

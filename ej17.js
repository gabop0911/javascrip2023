const readlineSync = require('readline-sync');

let sumEvenNumbers = 0;
let countEvenNumbers = 0;

let numberOne = readlineSync.questionInt("Ingrese el primer numero: ");
let numberTwo = readlineSync.questionInt("Ingrese el segundo numero: ");


while(numberTwo < numberOne){
    console.log("El segundo numero tiene que ser igual o mayor que el primero ");
    numberTwo = readlineSync.questionInt("Ingrese el segundo numero: ");
}

console.log("Los multiplos de los dos del intervalo son: ");

for(let i = numberOne ; i<= numberTwo ; i++){
    if ((i % 2 )=== 0){
        process.stdout.write(`${i}`);
        sumEvenNumbers += i;
        countEvenNumbers ++ ;
    }
}

console.log("\n\n La cantidad de multiplos de dos intervalos es de " + countEvenNumbers);
console.log("La suma de dos intervalos es de " + sumEvenNumbers);

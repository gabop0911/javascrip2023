const readlineSync = require('readline-sync');

let numberOne = readlineSync.questionInt("Ingrese el primer numero: ");
let numberTwo = readlineSync.questionInt("Ingrese el segundo numero: ");

let countEven = 0;
let countNaturalNumbers = 0;
let sumOddNumbers = 0;

console.log("Los numeros naturales entre dos numeros son: ");

for (let i = numberOne; i <= numberTwo; i++){
    console.log(i);
    countNaturalNumbers ++;
    if ((i % 2 )=== 0 ){
        countEven ++;
    }
    if ((i % 2) !== 0){
        sumOddNumbers += i;
    }
}


console.log(`la cantidad de numeros naturales que hay en un intervalo es : ${countNaturalNumbers}`);
console.log(`La cantidad de numeros pares hay un intervalo es ${countEven}`);
console.log(`La suma de numeros impares hay un intervalo es ${sumOddNumbers}`);

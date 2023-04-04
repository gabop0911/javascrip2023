
let sumEvenNumbers = 0;
let sumOddNumbers = 0;

for(let i = 1 ; i <= 1000 ; i++){
    if ((i % 2 ) === 0){
        sumEvenNumbers += i;
    } else{
        sumOddNumbers += i;
    }   
}
console.log(`La suma de los pares es ${sumEvenNumbers}`);
console.log(`La suma de los impares es ${sumOddNumbers}`);
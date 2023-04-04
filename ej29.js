const diceOne = Math.floor(Math.random() * 6) + 1;
const diceTwo = Math.floor(Math.random() * 6) + 1;


let sum = 0;
let count = 0;

for(let i = 0; i < 100; i++){
    diceOne = Math.floor(Math.random() * 6) + 1;
    diceTwo = Math.floor(Math.random() * 6) + 1;

    sum = diceOne + diceTwo

    if (sum === 10){
        count++;
    }

}

console.log(`El nnumero de veces que el dado dio 10 es : ${sum}`)
const readlineSync = require('readline-sync');

let number = readlineSync.questionInt("Ingrese un numero : ");
let flag = false;



for (let i = 1 ; i <= number; i++){
    if((i !== 1 ) || (i !== number)){
        if ((number % i) === 0){
            if ((number % i) === 0){
                flag = false;
            }
        }
    }
}

if (flag){
    console.log(`El numero ${number} es primo`);
}else{
    console.log(`El numero ${number} no es primo`);
}

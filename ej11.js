const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter number: ',(number)=>{
    if(isNaN(number)){ 
        console.log("Is not a number") 
    }else{
        for(let i = 3; i <=number; i = i+3){
            console.log(i);
        }
    }
    rl.close();
});
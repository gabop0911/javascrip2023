const fs = require('fs');
const readline = require('readline');

function processObj(obj,atr, value){
    switch (atr){
        case 'nombre':
            obj.name = value;
            break;
        case 'apellido':
            obj.lastName = value;
            break;
        case 'direccion':
            obj.direction = value;
            break;
        case 'estado':
            obj.state = value;
        default:
            throw 'no encontrado';
    }
}
let list = new Array();

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
const fr = readline.createInterface({
    input: fs.createReadStream('./DATOS.DAT'),
    crlfDelay: Infinity
});

fr.on('line', (line) => {
    let obj = JSON.parse(line);
    list.push(obj);
    fr.close();
}).on('close',()=>{
    rl.question("estado: ", (answer) => {
        let data = answer.split(',');
        let filtered = list.filter(e => e.state.toLowerCase() === answer.toLowerCase());
        for(c of filtered){
            console.log(c);
        }
        rl.close();
    });
});
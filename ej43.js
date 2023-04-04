const fs = require('fs');
const readline = require('readline');

function processObj(obj,atr, value){
    switch (atr){
        case 'name':
            obj.name = value;
            break;
        case 'last name':
            obj.lastName = value;
            break;
        case 'direction':
            obj.direction = value;
            break;
        case 'state':
            obj.state = value;
        default:
            throw 'atributo no encontrado';
    }
}
let map = new Map();

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
    map.set(obj.id, obj);
    fr.close();
}).on('close',()=>{
    rl.question("Escriba el id a modificar: ", (answer) => {
        let data = answer.split(',');
        processObj(map.get(data[0]),data[1].toLowerCase(),data[2]);
        for (c of map.values()) {
            fs.writeFileSync('./DATOS.DAT', JSON.stringify(c));
        }
        rl.close();
    });
});

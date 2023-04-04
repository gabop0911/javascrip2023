const readlineSync = require(`readline-sync`);


let grade;


for(let i = 0; i < 10 ; i++){
    grade = readlineSync.questionInt("Ingrese la calificacion que obtuvo en la materia ${i + 1} : ");
    array.push(grade);
}

let key = readlineSync.questionInt("Cual calificacion quieres buscar?: ");
let flag ;
for (let i = 0 ; i < array.length; i++){
    if (key === array[i]){
        flag = true;
    }else{
        flag = false;
    }
}

if (flag){
    console.log("La calificacion esta en la lista");
}else{
    console.log("La calificacion no esta en la lista");
}
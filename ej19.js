const readlineSync = require ('readline-sync');

function mostrarhora(){
  const current = new Date();
  let hours = current.getHours();
  let minutes = current.getMinutes();
  let seconds = current.getSeconds();
  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0"+ seconds : seconds;
  const currentHour = hours + ":" + minutes + ":" + seconds;
  console.log(currentHour);
}

function configuration(){
  let hour = readlineSync.question("Ingrese la hora (0-23): ")
  let minutes = readlineSync.question("Ingrese los minutos (0-59) : ")
  let seconds  = readlineSync.question("Ingrese los segundos (0-59) : ")
 const now = new Date();
 now.setHours(hour);
 now.Minutes(minutes);
 now.setSeconds(seconds);
}

configuration();

setInterval(showHour, 1000);
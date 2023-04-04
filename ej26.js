const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Introduce una frase: ", function(phrase) {
  const screenWidth = process.stdout.columns;
  const screenHeight = process.stdout.rows;

  const padding = " ".repeat((screenWidth - phrase.length)/2);
  console.log(padding + phrase.padEnd(screenWidth - padding.length));
  rl.close();
});

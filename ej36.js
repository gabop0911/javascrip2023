const matriz = [];
for (let i = 0; i < 4; i++) {
  matriz[i] = [];
  for (let j = 0; j < 5; j++) {
    matriz[i][j] = Math.floor(Math.random() * 100) + 1;
  }
}

console.log("Matriz original:");
console.log(matriz);
const transpuesta = [];
for (let i = 0; i < 5; i++) {
  transpuesta[i] = [];
  for (let j = 0; j < 4; j++) {
    transpuesta[i][j] = matriz[j][i];
  }
}

console.log("Matriz transpuesta:");
console.log(transpuesta);

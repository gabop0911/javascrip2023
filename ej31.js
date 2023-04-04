const num = 7;

let isPrime = true;
for (let i = 2; i < num; i++) {
  if (num % i === 0) {
    isPrime = false;
    break;
  }
}
if (isPrime) {
  console.log(num + " es primo.");
} else {
  console.log(num + " no es primo.");
}

let factorial = 1;
for (let i = 1; i <= num; i++) {
  factorial *= i;
}
console.log("El factorial de " + num + " es: " + factorial);

console.log("Tabla de multiplicar de " + num + ":");
for (let i = 1; i <= 10; i++) {
  console.log(num + " x " + i + " = " + (num * i));
}

const prompt = require("prompt-sync")({ sigint: true }); 

let numero1 = prompt("Introduce el primer número:");
let numero2 = prompt("Introduce el segundo número:");

// Convertimos las entradas de texto a números
numero1 = Number(numero1);
numero2 = Number(numero2);

if (numero1 > numero2) {
  console.log("El primer número (" + numero1 + ") es mayor que el segundo (" + numero2 + ")");
} else if (numero1 < numero2) {
  console.log("El segundo número (" + numero2 + ") es mayor que el primero (" + numero1 + ")");
} else {
  console.log("Los dos números son iguales.");
}

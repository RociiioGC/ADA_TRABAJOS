// Ejercicio 1: While 
// Crea un programa que solicite al usuario ingresar números continuamente 
// hasta que el usuario ingrese un número negativo. Luego, imprime la suma 
// de todos los números ingresados. 

const prompt = require(`prompt-sync`)();

let numero = parseInt(prompt("Ingrese un número:"));
let suma = 0;

while (numero >= 0) {
    numero = parseInt(prompt("Ingrese un número:"));
    suma += numero;
}

console.log(`Total de la suma de los números ingresados: ${suma}`);

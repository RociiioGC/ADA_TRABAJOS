// Ejercicio 4: ¿Es par o impar? 
// Consigna: 
// Los números pueden ser pares o impares. Escribe un programa que le pida al 
// usuario un número y determine si es par o impar. Muestra un mensaje explicativo indicando qué significa cada caso.

const prompt = require(`prompt-sync`)();

let numero = parseInt(prompt("Ingrese un numero: "));

if (numero % 2 === 0) {
    console.log(`El numero que ingresaste es par`);
} else 
    console.log(`El numero que ingresaste es impar`);




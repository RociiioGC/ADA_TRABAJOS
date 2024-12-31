const prompt = require('prompt-sync')();

// Pide al usuario que ingrese dos valores booleanos (true o false)
let condicion1 = prompt("Ingrese el primer valor booleano (true o false): ").toLowerCase() === 'true'; // Convertir los valores ingresados a booleanos
let condicion2 = prompt("Ingrese el segundo valor booleano (true o false): ").toLowerCase() === 'true';

// Muestra el resultado de las combinaciones lógicas
console.log("Condición 1:", condicion1);
console.log("Condición 2:", condicion2);
console.log("Condición 1 AND Condición 2:", condicion1 && condicion2);
console.log("Condición 1 OR Condición 2:", condicion1 || condicion2);
console.log("NOT Condición 1:", !condicion1);
console.log("NOT Condición 2:", !condicion2);

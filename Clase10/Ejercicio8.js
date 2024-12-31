// Ejercicio 8 - Conversión de Temperaturas: 
// Escribe un programa que convierta una temperatura dada en grados Celsius a grados Fahrenheit. 

const prompt = require("prompt-sync")({ sigint: true })

// Pide al usuario que ingrese la temperatura en Celsius y muestra el resultado en Fahrenheit.
let celsius = parseFloat(prompt("Ingrese temperatura en Celsius: "));
let fahrenheit = celsius * 9 / 5 + 32;     // La fórmula puede representarse asi: let fahrenheit = celsius * 9 / 5 + 32; 

console.log(`La temperatura ${celsius} Celcius transformada a Farenheit es: ${fahrenheit}`);




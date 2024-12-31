// Ejercicio 9: Cálculo del IMC: Escribe un programa que calcule el Índice de Masa Corporal (IMC). 
// El IMC se calcula con la fórmula: let imc = peso / (altura * altura); 

// Pide al usuario que ingrese su peso y su altura, y muestra el IMC calculado. 
const prompt = require("prompt-sync")({ sigint: true })

let peso = parseFloat(prompt("Ingrese su peso kg: "));
let altura = parseFloat(prompt("Ingrese su altura mts: "));
let imc = peso / (altura * altura);  // La fórmula puede representarse asi: let imc = peso / (altura * altura) 

console.log(`El resultado de su IMC es ${imc.toFixed(2)}`);    // toFixed(2) devuelve una cadena de texto que representa el número imc formateado con dos decimales.
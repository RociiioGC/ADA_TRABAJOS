// Escribe un programa que pida al usuario que ingrese su nombre, su 
// edad y su peso, y luego muestre un mensaje personalizado que incluya 
// toda esta información.
// Pista: En el ejercicio anterior, declaramos valores en las variables. 
// Ahora nos toca pedir datos al usuario, por lo que usaremos prompt￾sync para solicitar esta información.

const prompt = require("prompt-sync")({ sigint: true }); 
let nombre  = prompt("Ingrese su nombre: "); 
let edad = parseInt(prompt("Ingrese su edad: ")); 
let peso = parseFloat(prompt("Ingrese su peso: ")); 

console.log(`Hola ${nombre} esta es tu edad ${edad} y peso ${peso}`); 

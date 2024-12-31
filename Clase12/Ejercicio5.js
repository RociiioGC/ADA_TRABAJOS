// Ejercicio 5: Uso de Arrays y Condicionales 
// Crea un programa que solicite al usuario ingresar 5 nombres y los almacene en un array. 
// Luego, solicita al usuario ingresar un nombre y verifica si ese nombre se encuentra en el array. 
// (Pueden desglosar en pasos el código si eso les facilita su desarrollo) 

const prompt = require('prompt-sync')();

let nombre = prompt("Ingrese un nombre: "); 
let nombres = [];

for (let i = 0; i < 5; i++) {
let nombre = prompt(`Ingrese el nombre ${i + 1}: `);
nombres.push(nombre);
}

let nombreBuscado = prompt("Ingrese el nombre que desea buscar: ");

if (nombres.includes(nombreBuscado)) {
    console.log(`${nombreBuscado} se encuentra en la lista.`);
  } else {
    console.log(`${nombreBuscado} no se encuentra en la lista.`);
  } 
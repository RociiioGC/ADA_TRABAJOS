const prompt = require("prompt-sync")({ sigint: true }); 
//Define dos constantes, RANGO_MINIMO y RANGO_MAXIMO, con valores numéricos de tu elección
const RANGO_MINIMO = 2;
const RANGO_MAXIMO = 12;

// Pide al usuario que ingrese un número
let numero = parseFloat(prompt("Ingrese un número: ")); 

//verifica si está dentro del rango definido por las constantes
if (numero >= RANGO_MINIMO && numero <= RANGO_MAXIMO) {
    console.log("El numero ingresado esta dentro del rango"); 
} else {
    console.log("El numero ingresado no esta dentro del rango");
}
    





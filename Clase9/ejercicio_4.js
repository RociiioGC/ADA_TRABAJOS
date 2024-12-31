const prompt = require('prompt-sync')();

//Declara una variable nombre 
let nombre = "Rocio";

//pide al usuario que ingrese su nombre
let nombreUsuario = prompt("Ingrese su nombre: ");

//Verifica si el nombre ingresado es igual a tu nombre.
if(nombreUsuario === nombre) {
    console.log("El nombre ingresado es correcto");
} else {
    console.log("El nombre ingresado no es correcto");
}

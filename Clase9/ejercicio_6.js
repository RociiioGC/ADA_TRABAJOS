const prompt = require('prompt-sync')();

//Pide al usuario que ingrese su edad 
let edad = prompt("Ingrese su edad: ");

//verifica si es mayor o menor de edad. 
if(edad >= 18) {
    console.log("El usuario es mayor de edad")  //Muestra un mensaje personalizado según el caso.
} else {
    console.log("El usuario es menor de edad")  //Muestra un mensaje personalizado según el caso.
}



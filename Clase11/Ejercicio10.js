// Ejercicio 10: Adivina el número 
// Usa un for para resolver este ejercicio. 
// for(i = 1; i <= 10; i++);
const prompt = require(`prompt-sync`)();
// Crea un programa donde la computadora seleccione un número al azar entre 1 y 10.
let numeroSecreto = Math.floor(Math.random() * 10) + 1;

// pide al usuario que adivine el número hasta 3 intentos. Si el usuario acierta en cualquiera de los intentos, 
//muestra un mensaje de felicitación y detén los intentos restantes.
console.log("¡Adivina el número secreto (entre 1 y 10)!");

let numeroUsuario; // Declare numeroUsuario outside the loop

for (let intentos = 1; intentos <= 3; intentos++) {
  numeroUsuario = parseInt(prompt(`Intento ${intentos}: `)); 

  if (numeroUsuario === numeroSecreto) {
    console.log("¡Felicitaciones! Adivinaste el número secreto.");
    break; // Sale del bucle si el usuario adivina
  } else {
    console.log("Erraste! el numero ingresado no es correcto")
  }
// Muestra cuántos intentos quedan
    if (intentos < 3) {
      console.log(`Te quedan ${3 - intentos} intentos.`);
    }
  }
// Si no acierta después de los 3 intentos, muestra el número secreto.
if (numeroUsuario !== numeroSecreto) {
  console.log("¡Agotaste tus intentos! El número secreto era", numeroSecreto);
}
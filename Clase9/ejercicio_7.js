const prompt = require('prompt-sync')();

//Pide al usuario que ingrese su peso en kilogramos
let pesoKg = parseFloat(prompt("Ingrese un su peso en kg: "));

//y conviértelo a libras.
function convertirKgALibras(pesoKg) {
    const LIBRAS_POR_KILOGRAMO = 2.20462; 
    let libras = pesoKg * LIBRAS_POR_KILOGRAMO;
    return libras.toFixed(2);
  }
let resultado = convertirKgALibras(pesoKg) // llamar a la funcion 
console.log(`Su peso en libras es: ${resultado}`); //Muestra el resultado con un mensaje

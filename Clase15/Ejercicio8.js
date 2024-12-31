/*Tienes la frase "Los gatos son geniales". Extrae y muestra solo la parte 
"gatos" utilizando el método adecuado. */

let frase = "Los gatos son geniales";

// Extrae la palabra "gatos" usando substring()
let palabra = frase.substring(4, 9); // o se puede usar tmb let palabra = frase.slice(4, 9);

console.log(palabra);
/*Solicita al usuario ingresar la marca de un auto y utiliza una función flecha 
para verificar y mostrar si el auto es de origen nacional o importado. Considera 
que solo los autos de marcas "Chevrolet", "Ford" y "Fiat" son de origen 
nacional. 
✓ Solicita al usuario que ingrese la marca de un auto. 
✓ Utiliza una función flecha para determinar si la marca ingresada 
corresponde a un auto de origen nacional o importado. 
✓ Muestra un mensaje indicando si el auto es de origen nacional o 
importado, basado en la marca ingresada por el usuario. */

const prompt = require('prompt-sync')();

// Función flecha para verificar el origen del auto
const esNacional = (marca) => {
  const marcasNacionales = ["Chevrolet", "Ford", "Fiat"];
  return marcasNacionales.includes(marca);
};

// Solicita al usuario la marca del auto
let marca = prompt("Ingrese la marca del auto: ");

// Verifica el origen del auto usando la función flecha
if (esNacional(marca)) {
  console.log("El auto es de origen nacional.");
} else {
  console.log("El auto es importado.");
}
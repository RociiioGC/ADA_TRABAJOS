//Solicita al usuario una edad y usa una función flecha para clasificarla en niño, 
//adolescente, adulto o adulto mayor. 

const prompt = require('prompt-sync')();

// Función flecha para clasificar la edad
const clasificarEdad = (edad) => {
  if (edad <= 12) {
    return "Niño";
  } else if (edad <= 19) {
    return "Adolescente";
  } else if (edad <= 60) {
    return "Adulto";
  } else {
    return "Adulto mayor";
  }
};

// Solicita la edad al usuario
let edad = parseInt(prompt("Ingrese una edad: "));

// Clasifica la edad usando la función flecha
let clasificacion = clasificarEdad(edad);

// Muestra el resultado de la clasificacion
console.log("La persona es un:", clasificacion);
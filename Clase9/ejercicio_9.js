const prompt = require('prompt-sync')();

//Define una constante PI con el valor de pi (3.14159)
const PI = 3.14159;

//Pide al usuario que ingrese el radio de un círculo y calcula su área y perímetro utilizando la constante PI.
let radio = parseFloat(prompt("Ingrese el radio del circulo: "));

function calcularAreaCirculo(radio) {
    let area = PI * Math.pow(radio, 2); // Calcular el área
    return area.toFixed(2);
  }
let areaCirculo = calcularAreaCirculo(radio);
console.log("El área del círculo es:", areaCirculo);

const prompt = require('prompt-sync')();

//Pide al usuario que ingrese las longitudes de los tres lados de un triángulo
let lado1 = parseFloat(prompt("Ingrese la longitud del primer lado del triangulo: "));
let lado2 = parseFloat(prompt("Ingrese la longitud del segundo lado del triangulo: "));
let lado3 = parseFloat(prompt("Ingrese la longitud del tercer lado del triangulo: "));

// //Determina y muestra si el triángulo es equilátero, isósceles o escaleno. 
if (lado1 === lado2 && lado2 === lado3) {
  console.log("El triángulo es equilátero.");
} else if (lado1 === lado2 || lado1 === lado3 || lado2 === lado3) {
  console.log("El triángulo es isósceles.");
} else {
  console.log("El triángulo es escaleno.");
}

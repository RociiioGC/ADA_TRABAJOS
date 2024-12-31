//Solicita al usuario la cantidad de productos comprados y el precio unitario. 
//Usa una función flecha para calcular el total con descuento según la cantidad. 
 
const prompt = require('prompt-sync')();

// Función flecha para calcular el total con descuento
const calcularTotalConDescuento = (cantidad, precioUnitario) => {
  let total = cantidad * precioUnitario;
  if (cantidad >= 10) {
    total *= 0.9; // 10% de descuento
  } else if (cantidad >= 5) {
    total *= 0.95; // 5% de descuento
  }
  return total;
};

// Solicita la cantidad de productos y el precio unitario
let cantidad = parseInt(prompt("Ingrese la cantidad de productos: "));
let precioUnitario = parseFloat(prompt("Ingrese el precio unitario: "));

// Calcula el total con descuento
let total = calcularTotalConDescuento(cantidad, precioUnitario);

// Muestra el total
console.log("El total con descuento es:", total);
// Ejercicio 1: Calcular el precio final con IVA 
// Solicita al usuario el precio de un producto y el porcentaje de IVA. Usa una 
// función flecha para calcular el precio final. 

const prompt = require("prompt-sync")({ sigint: true }); 

let precio = parseFloat(prompt("Ingrese el precio del producto: ")); 
let porcentajeIVA = parseFloat(prompt("Ingrese el porcentaje de IVA del producto: ")); 

let calcularPrecioFinal = (precio, porcentajeIVA) => {
    return precio + (precio * (porcentajeIVA / 100)); 
}

let precioFinal = calcularPrecioFinal(precio, porcentajeIVA);

console.log("El precio final con IVA es:", precioFinal);    

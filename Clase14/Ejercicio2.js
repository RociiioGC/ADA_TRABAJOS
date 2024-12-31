// Ejercicio 2: Calcular promedio de calificaciones 
// Solicita al usuario cinco calificaciones y usa una función flecha para calcular 
// el promedio. 

const prompt = require('prompt-sync')();

// Función flecha para calcular el promedio
const calcularPromedio = (calificaciones) => {
  const suma = calificaciones.reduce((a, b) => a + b, 0);
  return suma / calificaciones.length;
};

// Array para almacenar las calificaciones
const calificaciones = [];

// Solicita al usuario 5 calificaciones
for (let i = 1; i <= 5; i++) {
  let calificacion = parseFloat(prompt(`Ingrese la calificación ${i}: `));
  calificaciones.push(calificacion);
}

// Calcula el promedio usando la función flecha
const promedio = calcularPromedio(calificaciones);

// Muestra el promedio
console.log("El promedio de las calificaciones es:", promedio);
// Ejercicio 5: Concatenar nombres (función expresada) 
// Crea una función expresada llamada concatenarNombres que reciba dos 
// nombres (nombre y apellido) como parámetros y devuelva el nombre 
// completo concatenado. 


let nombre = "Rocio"; 
let apellido = "Garcia";

let concatenarNombres = function(nombre, apellido) {
  return nombre + " " + apellido; 
};

let nombreCompleto = concatenarNombres(nombre, apellido); 
console.log(nombreCompleto);

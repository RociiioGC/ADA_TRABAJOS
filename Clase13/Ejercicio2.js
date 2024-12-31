// Ejercicio 2: Número mayor (función expresada) 
// Crea una función expresada llamada encontrarMayor que reciba dos 
// números como parámetros y devuelva el número mayor. 

let numero1 = 4;
let numero2 = 7;

let encontrarMayor = function() { 
  if (numero1 > numero2) {
    return numero1;
  } else {
    return numero2;
  }
};

let numeroMayor = encontrarMayor(); 
console.log(`El numero mayor es:`,numeroMayor);

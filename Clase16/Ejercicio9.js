/*Imagina que tienes una lista de palabras ['sol', 'luna', 'estrella']. Queremos 
saber cuántas letras hay en total entre todas las palabras. Por ejemplo, 
'sol' tiene 3 letras, 'luna' tiene 4, y 'estrella' tiene 8. La suma total debería 
ser 15. */

let palabras = ['sol', 'luna', 'estrella'];

let totalLetras = palabras
  .map(palabra => palabra.length) 
  .reduce((suma, longitud) => suma + longitud, 0); 

console.log(totalLetras);
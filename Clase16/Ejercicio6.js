/*Supongamos que tienes una lista de palabras ['hola', 'mundo', 'javascript']. 
Queremos transformarlas para que cada palabra tenga un prefijo "¡" y un 
sufijo "!". Por ejemplo, la palabra "hola" se debería convertir en "¡hola!". */

let palabras = ['hola', 'mundo', 'javascript'];

let palabrasModificadas = palabras.map(palabra => `¡${palabra}!`);

console.log(palabrasModificadas);
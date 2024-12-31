/*Dada una lista de números [1, 2, 3, 4], necesitamos calcular el resultado de 
sumarlos todos juntos. Es decir, deberías obtener 1 + 2 + 3 + 4. Al 
finalizar, imprime el total en la consola. */

const numeros = [1, 2, 3, 4];

const sumaTotal = numeros.reduce((acumulador, numero) => acumulador + numero, 0);

console.log(sumaTotal);
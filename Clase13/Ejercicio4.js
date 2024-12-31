// Ejercicio 4: Número par o impar 
// Crea una función declarada llamada esPar que reciba un número y 
// devuelva "Es par" si el número es par o "Es impar" si el número es impar. 
// Usa una variable local para guardar el resultado.

let numero = 8;

function esPar(numero) {
    if (numero % 2 === 0) {
        return 'Es par'; 
    } else  {
        return 'Es impar';
    }

}
let resultado = esPar(numero);
console.log(resultado);

// Ejercicio 10: Factorial de un número (Ejercicio entrevista) 
// Crea una función expresada llamada calcularFactorial que reciba un 
// número y devuelva su factorial. 
// Fórmula del factorial: n! = n x (n-1) x ... x 1

const calcularFactorial = function(numero) {
    if (numero < 0) {
      return "El factorial no está definido para números negativos.";
    } else if (numero === 0) {
      return 1;
    } else {
      let factorial = 1;
      for (let i = 1; i <= numero; i++) {
        factorial *= i;
      }
      return factorial;
    }
  };

let numero = 5;
let resultado = calcularFactorial(numero);
console.log(`El factorial de ${numero} es: ${resultado}`); 



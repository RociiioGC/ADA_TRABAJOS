//Escribe un programa en JavaScript para contar cuántas veces el usuario 
//menciona sus flores favoritas. Realiza las siguientes acciones: 
const prompt = require('prompt-sync')();
// 1. Inicializa un array vacío para almacenar las flores favoritas.
let floresFavoritas = [];

// 2. Pregunta al usuario por sus tres flores favoritas y agrégalas al array.
floresFavoritas[0] = prompt("Ingrese su primera flor favorita: ");
floresFavoritas[1] = prompt("Ingrese su segunda flor favorita: ");
floresFavoritas[2] = prompt("Ingrese su tercera flor favorita: ");

// 3. Pregunta al usuario por una flor específica.
let florBuscada = prompt("Ingrese una flor para verificar si está entre sus favoritas: ");

// Verifica si la flor está entre las favoritas.
let esFavorita = false;
for (let i = 0; i < floresFavoritas.length; i++) {
  if (floresFavoritas[i] === florBuscada) {
    esFavorita = true;
    break;
  }
}

// Muestra un mensaje indicando si la flor es favorita o no.
if (esFavorita) {
  console.log(florBuscada + " es una de tus flores favoritas.");
} else {
  console.log(florBuscada + " no está entre tus flores favoritas.");
}

// 4. Muestra por consola cuántas de las flores favoritas se mencionaron.
let contador = 0;
for (let i = 0; i < floresFavoritas.length; i++) {
  if (floresFavoritas[i] === florBuscada) {
    contador++;
  }
}

console.log("La flor " + florBuscada + " se mencionó " + contador + " veces entre tus flores favoritas.");
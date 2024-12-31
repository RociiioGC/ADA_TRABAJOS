// Programa que simula ser un lorito: Repite lo que escucha 5 veces
// Paso 1: importamos modulo Prompt-Sync

const prompt = require(`prompt-sync`)();

// Paso 2: Solicitamos al usuario ingresar un texto 
let texto = prompt("Ingrese el texto que quieres que el loro repita: ");

// Paso 3: Usamos el ciclo for para repetir el texto 5 veces 
// Estructura del ciclo:
// -Inicializacion: let i = 0 (inicializa el contador en 0)
// -Condicion: i < 5 (el ciclo continua mientras i sea menor que 5)
// -Modificador/ Incremento : i++ (Suma 1 al contador en cada iteracion) 
for (let i = 0; i < 5; i++) {
    console.log(`Repeticion ${i + 1} : ${texto}`);
}
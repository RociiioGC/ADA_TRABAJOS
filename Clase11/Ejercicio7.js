// Ejercicio 7: Calculadora simple 
// Consigna: 
// Crea un programa que le pida al usuario dos números y una operación matemática a realizar: suma, resta, multiplicación o división.
// Según la operación ingresada, el programa deberá calcular y mostrar el resultado. Si el usuario 
// ingresa una operación inválida, el programa debe mostrar un mensaje de error. 
// Usa switch para resolverlo.

const prompt = require(`prompt-sync`)();
let numeroPrimero = parseInt(prompt("Ingrese un número: "));
let numeroSegundo = parseInt(prompt("Ingrese otro número: "));
let operación = prompt("Elija una operacion matematica a realizar (suma, resta, multiplicación o división): ");

switch(operación) {
    case "suma":
    console.log(`El resultado de la suma es: ${numeroPrimero + numeroSegundo}`);
    break;
    case "resta":
    console.log(`El resultado de la resta es: ${numeroPrimero - numeroSegundo}`); 
    break;
    case "multiplicacion":
    console.log(`El resultado de la multiplicacion es: ${numeroPrimero * numeroSegundo}`);  
    break;
    case "division": 
    console.log(`El resultado de la division es: ${numeroPrimero / numeroSegundo}`);
    break;
    default:
    console.log("Operacion incorrecta");
 }








//Ejercicio 2: Do While 
// Escribe un programa que solicite al usuario ingresar una contraseña. Si la 
// contraseña es incorrecta, debe volver a pedirla hasta que el usuario 
// ingrese la correcta. La contraseña correcta es "1234". 

const prompt = require(`prompt-sync`)();

let contraseña = "1234";
let contraseña1 = prompt("Ingrese una contraseña: ");

do {
  if (contraseña1 === contraseña) {
    console.log("La contraseña es correcta"); 
  } else {
    console.log("La contraseña es incorrecta");
    contraseña1 = prompt("Ingrese una contraseña: ");
  }
} while (contraseña1 !== contraseña); 








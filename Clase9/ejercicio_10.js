const prompt = require('prompt-sync')();
//Pide al usuario que ingrese un número del 1 al 7 
let dia = parseInt(prompt("Ingrese un número del 1 al 7: "));

//muestra el día de la semana correspondiente.Si el número no está dentro de ese rango, muestra un mensaje de error. 
switch (dia) {
    case 1:
      console.log("Lunes");
      break;
    case 2:
      console.log("Martes");
      break;
    case 3:
      console.log("Miércoles");
      break;
    case 4:
      console.log("Jueves");
      break;
    case 5:
      console.log("Viernes");
      break;
    case 6:
      console.log("Sábado");
      break;
    case 7:
      console.log("Domingo");
      break;
    default:
      console.log("Número inválido. Ingrese un número del 1 al 7.");
  }

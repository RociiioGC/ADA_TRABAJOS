const prompt = require('prompt-sync')();
//Escribe un programa que pida al usuario que ingrese tres números

let numero1 = parseFloat(prompt("Ingrese un primer numero: "));
let numero2 = parseFloat(prompt("Ingrese un segundo numero: "));
let numero3 = parseFloat(prompt("Ingrese un tercer numero: "));

//determine cuál es el mayor de los tres

if(numero1 > numero2 && numero1 > numero3){
    console.log("El primer numero ingresado es el mayor");
} else if(numero2> numero1 && numero2 > numero3){
    console.log("El segundo numero ingresado es el mayor")   
} else {
    console.log("el tercer numero ingresado es el mayor");
}
/*Tienes una lista de nombres ['Carlos', 'Daniel', 'Laura', 'Ana']. Queremos 
saber si el nombre 'Laura' está presente en la lista y, si lo está, deberías 
devolverlo.*/

let nombres = ['Carlos', 'Daniel', 'Laura', 'Ana'];

let nombreBuscado = nombres.find(nombre => nombre === 'Laura');

if (nombreBuscado) {
  console.log("El nombre 'Laura' está en la lista:", nombreBuscado); 
} else {
  console.log("El nombre 'Laura' no está en la lista.");
}
/*Tienes una lista de comidas ["Pizza", "Hamburguesa", "Tacos"]. Verifica si 
"Sushi" está en la lista y muestra un mensaje que confirme si está o no. */

let comidas = ["Pizza", "Hamburguesa", "Tacos"];

// Verifica si "Sushi" está en la lista usando includes()
if (comidas.includes("Sushi")) {
  console.log("Sushi está en la lista de comidas.");
} else {
  console.log("Sushi no está en la lista de comidas.");
}
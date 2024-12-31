/*Tienes una fila de mascotas en una clínica veterinaria ["Perro", "Gato", 
"Conejo"]. Llega un "Hámster" que debe ser atendido primero. Agrega el 
"Hámster" al inicio de la lista. Luego, atiende a la primera mascota de la 
fila y muéstrala. Finalmente, muestra la lista actualizada. */

let mascotas = ["Perro", "Gato", "Conejo"];

// Agrega el "Hámster" al inicio de la lista usando unshift()
mascotas.unshift("Hámster");
    
// Atiende a la primera mascota de la fila (y eliminarla de la lista) usando shift()
let mascotaAtendida = mascotas.shift();
    
// Muestra la mascota atendida
console.log("Mascota atendida:", mascotaAtendida); 
    
// Muestra la lista actualizada
console.log("Lista de mascotas actualizada:", mascotas);
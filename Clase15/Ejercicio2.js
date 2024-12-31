/*Tienes una lista de invitados a una fiesta ["Ana", "Juan", "Carlos", "Sofía"]. 
El último invitado no puede asistir. Elimina al último invitado y muestra 
quién fue eliminado y el estado actualizado de la lista. */

let invitados = ["Ana", "Juan", "Carlos", "Sofía"];
// Elimina al último invitado usando pop()
let invitadoEliminado = invitados.pop();

// Muestra quién fue eliminado
console.log("Invitado eliminado:", invitadoEliminado);

// Muestra la lista actualizada
console.log("Lista de invitados actualizada:", invitados);
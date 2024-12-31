// Ejercicio 7: Mensaje según la hora 
// Declara una variable global llamada horaActual (puedes asignarle un valor 
// fijo). Crea una función declarada llamada mostrarSaludo que imprima 
// "Buenos días" si la hora es menor a 12, "Buenas tardes" si es menor a 18, o 
// "Buenas noches" en cualquier otro caso. 

let horaActual = 6;
function mostrarSaludo() {
    if (horaActual < 12) {
        return 'Buenos Dias'
    }if (horaActual < 18) {
        return 'Buenas tardes'
    } else {
        return 'Buenas Noches'
    }
}
console.log(mostrarSaludo());

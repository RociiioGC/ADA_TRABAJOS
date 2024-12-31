/*En este ejercicio, trabajaremos con una lista de modelos de autos. 
Implementa una función llamada ultimaAparicionModeloAuto(modelo) que 
encuentre y muestre la última posición en la lista donde aparece el modelo 
específico de auto dado por modelo. 
Datos Iniciales: 
✓ Utiliza un array llamado modelosAutos que contiene varios modelos de 
autos, algunos repetidos para demostrar la funcionalidad. 
 
Funcionalidad: 
✓ Implementa la función ultimaAparicionModeloAuto(modelo), que toma 
modelo como parámetro (un string). 
✓ Debes recorrer el array de manera manual para encontrar la última 
aparición del modelo. 
✓ Si el modelo se encuentra en el array, la función debe imprimir por 
consola la posición (índice + 1) en la que aparece (considerando que la 
numeración es de 1 a N). 
✓ Si el modelo no está en el array, debe imprimir un mensaje indicando que 
el modelo no está presente. */

const modelosAutos = [
    "Ford Fiesta", 
    "Toyota Corolla",
     "Honda Civic", 
     "Ford Focus",
      "Toyota Yaris", 
      "Honda CRV", 
      "Ford Fiesta", 
      "Mazda 3"];

function ultimaAparicionModeloAuto(modelo) {
  let ultimaPosicion = 0; 

  for (let i = 0; i < modelosAutos.length; i++) {
    if (modelosAutos[i] === modelo) {
      ultimaPosicion = i + 1; 
    }
  }

  if (ultimaPosicion > 0) {
    console.log(`La última aparición del modelo ${modelo} es en la posición ${ultimaPosicion}.`);
  } else {
    console.log(`El modelo ${modelo} no está presente en la lista.`);
  }
}

ultimaAparicionModeloAuto("Ford Fiesta"); 
ultimaAparicionModeloAuto("Renault Clio"); 
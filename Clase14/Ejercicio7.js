/*Define dos objetos libro1 y libro2 con las siguientes propiedades y valores: 
✓ título: una cadena con el título del libro. 
✓ autor: una cadena con el nombre del autor del libro. 
✓ anioPublicacion: un número con el año de publicación del libro. 
Luego, crea una función llamada mostrarLibro que tome un arreglo de libros 
como parámetro y muestre por consola la información de cada libro en el 
formato especificado. */
 
// Define los objetos libro1 y libro2
const libro1 = {
    titulo: "Cien años de soledad",
    autor: "Gabriel García Márquez",
    anioPublicacion: 1967
  };
  
  const libro2 = {
    titulo: "El Hobbit",
    autor: "J.R.R. Tolkien",
    anioPublicacion: 1937
  };
  
  // Crea la función mostrarLibro
  function mostrarLibro(libros) {
    libros.forEach(libro => {
      console.log(`Título: ${libro.titulo}`);
      console.log(`Autor: ${libro.autor}`);
      console.log(`Año de publicación: ${libro.anioPublicacion}\n`);
    });
  }
  
  // Crea un arreglo de libros
  const libros = [libro1, libro2];
  
  // Llama a la función mostrarLibro
  mostrarLibro(libros);
// Ejercicio 8: Convertir grados Celsius a Fahrenheit (Ejercicio entrevista) 
// Crea una función expresada llamada convertirCelsiusAFahrenheit que 
// reciba una temperatura en grados Celsius y devuelva la temperatura en 
// Fahrenheit. 
// Fórmula: Farenheit (Celsius * 9/5) + 32 

let convertirCelsiusAFahrenheit = function(celsius) {
    let fahrenheit = (celsius * 9) / 5 + 32;
    return fahrenheit;
  };
  
  let temperaturaCelsius = 25;
  let temperaturaFahrenheit = convertirCelsiusAFahrenheit(temperaturaCelsius); 
  console.log(temperaturaCelsius + " grados Celsius son equivalentes a " + temperaturaFahrenheit + " grados Fahrenheit.");


// Pedir nombre mediante prompt y mostrarlo en consola junto con algún texto de saludo. Ejemplo:  ¡Hola, Juan!

let nombre = prompt("Hola! Por favor escribir un nombre");

alert("Hola! " + nombre);

// Pedir un número mediante prompt, parsearlo, sumarlo a otro que se encuentre almacenado en una variable y luego mostrar el resultado en consola.

let numero = prompt("Por favor escribir un numero");
let numero2 = prompt("Por favor escribir un numero");

let numeroInt = parseInt(numero);
let numero2Int = parseInt(numero2);

let resultado = numeroInt + numero2Int;

alert("El resultado de la suma es: " + resultado);

// Elegir un tipo de pedido. Por ejemplo:
// Pedir un texto mediante prompt, luego otro, concatenarlos y mostrarlo en un alerta.

let palabra = prompt("Por favor escibir un texto");
let palabra2 = prompt("Por favor escribir otro texto");

let resultado2 = palabra + palabra2;

alert("El resultado de la concatenacion es:" + resultado2);

let numero = prompt("Hola! Por favor escribir un numero");

if (parseInt(numero) > 1000) {
  alert("El numero es mayor a 1000");
}

let texto = prompt("Hola! Por favor escribir un texto");

if (texto === "hola" || texto === "HOLA") {
  alert("El usuario ingreso hola o HOLA");
}

let numero2 = parseInt(prompt("Hola! Por favor escribir un numero"));

if (numero2 >= 10 && numero2 <= 50) {
  alert("El numero ingresado esta entre 10 y 50");
}

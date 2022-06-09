// Tomando como base los ejemplos anteriores de la estructura for y while, crear un algoritmo que repita un bloque de instrucciones. En cada repetición es necesario efectuar una operación o comparación para obtener una salida por alerta o consola.

// 1. Pedir número mediante prompt y sumarle otro número en cada repetición,realizando una salida por cada resultado

// let numeroAux = 0;

// let numero = parseInt(prompt("Hola! Por favor escribir un numero"));

// for (let i = 0; i < 5; i++) {
//   numeroAux = numero + numeroAux;

//   alert(numeroAux);

//   numero = parseInt(prompt("Hola! Por favor escribir un numero"));
// }

// 2. Pedir un texto mediante prompt, concatenar un valor en cada repetición, realizando una salida por cada resultado, hasta que se ingresa “ESC”.

// let textoAux = "";

// do {
//   text = prompt("Hola! Por favor escribir un texto");
//   textoAux = textoAux + text;
//   alert(textoAux);
// } while (text != "ESC");

// 3. Pedir un número por prompt, repetir la salida del mensaje “Hola” la cantidad de veces ingresada.

// numero = parseInt(prompt("Hola! Por favor escribir un numero"));

// for (let i = 0; i < numero; i++) {
//   alert("Hola");
// }

// numero = parseInt(prompt("Hola! Por favor escribir un numero"));

// while (numero != 0) {
//   alert("Hola");
//   numero = numero - 1 ;
// }

// Ejemplo de Clase

// do {
//     let userEmail = prompt("Ingrese su correo electrónico:");
//     let confirmUserEmail = prompt("Confirme su correo electrónico:");

//     if ( userEmail === confirmUserEmail ) {
//         alert("El correo: "+userEmail+" a sido guardado con éxito!");
//         askAgain = false;
//     } else {
//         alert("Los correos deben de ser iguales");
//     }
// } while (askAgain);

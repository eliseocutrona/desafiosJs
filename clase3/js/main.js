// Tomando como base los ejemplos anteriores de la estructura for y while, crear un algoritmo que repita un bloque de instrucciones. En cada repetición es necesario efectuar una operación o comparación para obtener una salida por alerta o consola.

// 1. Pedir número mediante prompt y sumarle otro número en cada repetición,realizando una salida por cada resultado

let numeroAux = 0;

let numero = parseInt(prompt("Hola! Por favor escribir un numero"));

for (let i = 0; i < 5; i++) {
  numeroAux = numero + numeroAux;

  alert(numeroAux);
  numero = parseInt(prompt("Hola! Por favor escribir un numero"));
}

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




// Simulador de Compra

// Hola chicos, les dejo todos los ejercicios vistos en la clase de hoy, les dejo también algunos desafíos sobre el simulador de compras:

// Crear una variable que se podría llamar “cantidadTotal” donde vamos a almacenar las cantidades de los productos que el usuario haya comprado, inicializarla en 0 (cero).
// Dentro del ciclo Do While usar la variable “cantidadtotal” para ir acumulando el valor de la variable “cantidad” en cada iteración, usar la notación += para ir acumulando los valores. Consejo hacerlo en la línea 32 luego de la variable “precioTotal”.
// Mostrar por medio de un alert() el contenido de la variable “cantidadTotal” y “precioTotal” con un mensaje user friendly osea que el usuario lo pueda entender, por ejemplo: “A comprado 4 productos y el total es $3500”.


// PLUS:

// Crear un cuadro de diálogo por medio de un método confirm() donde preguntes al usuario algo como: ¿Desea finalizar la compra? almacenar esa respuesta booleana en una variable que se podría llamar “finalizarCompra” luego mediante una estructura if else mostrar un mensaje mediante un alert SI “finalizarCompra” esta seteado como “true” mostrar un mensaje que diga: “Su compra ha sido realizada con éxito” SINO “Esperamos volver a verle pronto” .

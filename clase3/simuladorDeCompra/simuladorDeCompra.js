let producto = "";
let precio = 0;
let cantidad = 0;
let precioTotal = 0;
let cantidadTotal = 0;
let seguirComprando = false;

do {
    producto = prompt("¿Queres comprar shampoo, acondicionador o ambos?");
    cantidad = Number(prompt("¿Cuantos queres comprar?"));

    switch (producto) {
        case "shampoo":
            precio = 500;
            break;
        case "acondicionador":
            precio = 700;
            break;
        case "ambos":
            precio = 1100;
            cantidad *= 2;
            break;
        default:
            alert("Algunos de los datos ingresados no son correctos");
            precio = 0;
            cantidad = 0;
            break;
    }
    precioTotal += precio * cantidad;
    cantidadTotal += cantidad
    seguirComprando = confirm("¿Queres seguir comprando?")
} while (seguirComprando);

alert("Ha comprado: "+cantidadTotal+ " unidades y el precio final es: $"+precioTotal);

finalizarCompra = confirm ("¿Quiere finalizar la compra?");
if (finalizarCompra){
    alert("Su compra ha sido realizada con exito");
} else {
    alert ("Esperamos volver a verlo pronto");
}
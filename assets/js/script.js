const total = document.querySelector("#total");
const btnSuma = document.querySelector("#suma");
const btnResta = document.querySelector("#resta");
const cantidad = document.querySelector(".cantidad");
const valor = document.querySelector(".valor");

const precio = 400000;
let cant = 1;
let tot = precio * cant;


total.innerHTML = tot;
valor.innerHTML = precio;
cantidad.innerHTML =cant;

//Estructura para agregar condicional if que cumpla la lógica y alerta
/* btnSuma.addEventListener("click", () => {
    cant = cant + 1;
    tot = precio * cant;
    cantidad.innerHTML = cant;
    total.innerHTML = tot;
});
btnResta.addEventListener("click", () => {
    cant = cant - 1;
    tot = precio * cant;
    cantidad.innerHTML = cant;
    total.innerHTML = tot;
}); */

//Estructura basada en la anterior que cumple la lógica mas limpia en presencia del DOM :)
const actualizarCantyTotal = (nuevaCantidad) => {
    cant = nuevaCantidad;
    tot = precio * cant;
    cantidad.innerHTML = cant;
    total.innerHTML = tot;
};

btnSuma.onclick = () => {
    document.body.contains(total) && actualizarCantyTotal(cant + 1);
};

btnResta.onclick = () => {
    cant > 1 ? actualizarCantyTotal(cant - 1) : alert("No puedes seleccionar menos de 1 producto");
};


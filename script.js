// ITERACIÓN 1

const formulario = document.getElementById("formulario");

formulario.addEventListener("submit", function (e) {

    e.preventDefault();

    let placa = document.getElementById("placa").value;
    let marca = document.getElementById("marca").value;
    let color = document.getElementById("color").value;
    let celda = document.getElementById("celda").value;

    let fila = `
    <tr>
        <td>${placa}</td>
        <td>${marca}</td>
        <td>${color}</td>
        <td>${celda}</td>
    </tr>
    `;

    document.querySelector("#tabla tbody").innerHTML += fila;

    formulario.reset();

});

// ITERACIÓN 2

function registrarUsuario() {

    let nombre = document.getElementById("nombreUsuario").value;
    let correo = document.getElementById("correoUsuario").value;
    let rol = document.getElementById("rolUsuario").value;

    let fila = `
    <tr>
        <td>${nombre}</td>
        <td>${correo}</td>
        <td>${rol}</td>
    </tr>
    `;

    document.querySelector("#tablaUsuarios tbody").innerHTML += fila;

    document.getElementById("formUsuario").reset();

}

function registrarCelda() {

    let numero = document.getElementById("numeroCelda").value;
    let estado = document.getElementById("estadoCelda").value;

    let fila = `
    <tr>
        <td>${numero}</td>
        <td>${estado}</td>
    </tr>
    `;

    document.querySelector("#tablaCeldas tbody").innerHTML += fila;

    document.getElementById("formCelda").reset();

}
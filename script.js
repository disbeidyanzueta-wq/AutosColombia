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
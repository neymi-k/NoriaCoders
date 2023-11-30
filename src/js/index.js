/*ARRAY BASICO DE DONDE MANIPULAREMOS SUS ELEMENTOS*/
var miArray = ["jander", "aLICIA", "NEYMI", "MARCE", "ALVARO"];


// Función para mostrar los elementos del array
function mostrarArray() {
    var contenedor = document.getElementById("contenedorArray");

    // Limpiar el contenido actual
    contenedor.innerHTML = "";

    // Generar elementos para cada elemento del array
    miArray.forEach(function (elemento, index) {
        var nuevoElemento = document.createElement("div");
        nuevoElemento.className = "elemento";
        nuevoElemento.textContent = elemento;

        // Asociar manejador de clic para eliminar el elemento al hacer clic
        nuevoElemento.onclick = function () {
            eliminarElemento(index);
        };

        contenedor.appendChild(nuevoElemento);
    });
}


// Función para eliminar un elemento del array por su índice
function eliminarElemento(index) {
    miArray.splice(index, 1);
    mostrarArray();
}

// Mostrar los elementos iniciales
mostrarArray();
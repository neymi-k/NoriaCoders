
/*ARRAY BASICO DE DONDE MANIPULAREMOS SUS ELEMENTOS*/
/*Varibles Globales */
var miArray = ["JANDER", "ALICIA", "NEYMI", "MARCELA", "ALVARO", "JOACO", "ALBERTO", "ROXANA", "ELENA", "ALFREDO", "VICTOR", "ALBA", "HANNAH"];
var elementosSelecanterior = []; /* Esta variable global me va a servir para ir llevando la cuenta del indice seleccionado, es decir este llevara el registro de los coders ya seleccioandos para que no se repitan */

/**FUNCION SENCILLA PARA SELECCIONAR EL ELEMENTO DEL ARRAY */
/******************************************************** */
function seleccionarElemento() {

        /*Utilizo la variable global como local en la función*/
        /*A esto se le llama shadowing, o hacer sombra */
        var elementosSelecanterior = this.elementosSelecanterior;

        //Punto de control que avisa que todos los coders fueron seleccionados
        //si los elementos de la variable global es estrictamente igual a todos del array principal, retorna 
        if (elementosSelecanterior.length === miArray.length) {   

                alert("Todos los elementos han sido seleccionados.");
                return;

        }
        
        // Obtener un índice aleatorio del array
        // guardamos en varible el resultado de la funcion aletoria y redondeo
        let indiceAleatorio = Math.floor(Math.random() * miArray.length);

        /*punto de control para saber si un elemento ya ha sido seleccionado */
        if (elementosSelecanterior.includes(indiceAleatorio)) {

                // Si ya ha sido seleccionado, volver a intentar
                seleccionarElemento();

        } else {

                // Marcar el elemento como seleccionado, y lo guardo en la variable global
                elementosSelecanterior.push(indiceAleatorio);

                // Obtener el elemento correspondiente al índice aleatorio
                let elementoSeleccionado = miArray[indiceAleatorio];

                /*Construccion de la estetica de la cajita */
                let crearCajita2 = document.createElement("div"); /*creo variable para guardar div creado */
                crearCajita2.className   = "elemento2";           /*a ese elemento creado le doy un nombre */
                crearCajita2.textContent = elementoSeleccionado;  /*ademas, le doy el contenido del array */
                let contenedordeCajitaAleatoria2 = document.getElementById("contenedorArrayAleatorio2");
                /* contenedordeCajitaAleatoria2.innerHTML = '';      Esto hace que se limpie el elemento del hatml cada vez que se eecuta la funcion */
                contenedordeCajitaAleatoria2.appendChild(crearCajita2);

        }
      
}



/*funcion para agregar un nuevo elemento al array inicial */
/******************************************************** */
function agregarElemento() {
        
        /*Obtengo el valor del imput y limpio sus espacios con el trim()*/
        let nuevoElemento = document.getElementById("nuevoElemento").value.trim();
  
        /*punto de control para ver si el imput no esta vacio*/
        if (nuevoElemento !== "") {
          miArray.push(nuevoElemento);                         /*agrego el nuevo elmento al array con el metodo push*/
          document.getElementById("nuevoElemento").value = ""; /*Limpia el input, estableciendo su valor en una cadena vacía. */
          alert("CODER AGREGADO");
        } else {
          alert("Debes agregar un nombre sin espacios");
        }
        
}

// Función para mostrar los elementos del array
function mostrarArray() {

        let contenedor = document.getElementById("contenedorArray");

        // Limpiar el contenido actual
        contenedor.innerHTML = "";

        // Generar elementos para cada elemento del array
        miArray.forEach(function (elemento, index) {
            let nuevoElemento = document.createElement("div");
            nuevoElemento.className = "elemento";
            nuevoElemento.textContent = elemento;

            contenedor.appendChild(nuevoElemento);
        });

}


// Mostrar los elementos iniciales
mostrarArray();

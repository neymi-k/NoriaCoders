
  /*ARRAY BASICO DE DONDE MANIPULAREMOS SUS ELEMENTOS*/
    /*Varibles Globales */
    let miArray = ["JANDER", "ALICIA", "NEYMI", "MARCELA", "ALVARO", "JOACO", "ALBERTO", "ROXANA", "ELENA", "ALFREDO", "VICTOR", "ALBA", "HANNAH"];

    var elementosSelecanterior = []; /* Esta variable global me va a servir para ir llevando la cuenta del indice seleccionado, es decir este llevara el registro de los coders ya seleccioandos para que no se repitan */

    document.getElementById('reload-button').addEventListener('click', function() {
            // Recargar la página
            location.reload();
    });


    /*funcion para agregar un nuevo elemento al array inicial */
    /******************************************************** */
    /******************************************************** */
    function agregarElemento() {
            
            /*Obtengo el valor del imput y limpio sus espacios con el trim()*/
            let nuevoElemento = document.getElementById("nuevo-elemento").value.trim();
    
            /*punto de control para ver si el imput no esta vacio*/
            if (nuevoElemento !== "") {
            miArray.push(nuevoElemento);                         /*agrego el nuevo elmento al array con el metodo push*/
            document.getElementById("nuevo-elemento").value = ""; /*Limpia el input, estableciendo su valor en una cadena vacía. */
            Swal.fire("CODER AGREGADO");
            } else {
                Swal.fire("Debes agregar un nombre sin espacios");
            }
            
    }
    /***********************************************************/
    /******************************************************** */


    // Función para mostrar los elementos del array
    /******************************************************** */
    /******************************************************** */
    function mostrarArray() {

        let contenedor = document.getElementById("contenedor-array");

        // Limpiar el contenido actual
        contenedor.innerHTML = "";

        // Generar elementos para cada elemento del array
        miArray.forEach(function (elemento, index) {
            let nuevoElemento = document.createElement("div");
            nuevoElemento.className = "elemento";
            nuevoElemento.textContent = elemento;
            // Puedo asignar eventos a los elementos creados por Dom
            nuevoElemento.onclick = function() {
                EliminarElementosdelArrayPrincipal(this);
            };
            contenedor.appendChild(nuevoElemento);
        });
        console.log(miArray); //observador
    }
    /******************************************************** */
    /******************************************************** */


   /**FUNCION ELIMINAR EL ELEMENTOS DEL ARRAY PRINCIPAL*/
    /******************************************************** */
    /******************************************************** */
    function EliminarElementosdelArrayPrincipal(elemento) {

        // Obtener el contenido del elemento que se hizo clic
        let contenidoElemento = elemento.textContent;
        let indiceElemento = miArray.indexOf(contenidoElemento);

         // Verificar si el elemento está en el array
         if (indiceElemento !== -1) {
            // Eliminar el elemento del array
            miArray.splice(indiceElemento, 1);

            // Eliminar el elemento del DOM
            elemento.remove();

            console.log("Elemento eliminado:", contenidoElemento);
            console.log("miArray actualizado:", miArray);
        }
    }
    /******************************************************** */
    /******************************************************** */

  

    /**FUNCION SENCILLA PARA SELECCIONAR EL ELEMENTO DEL ARRAY */
    /******************************************************** */
    /******************************************************** */
    function seleccionarElemento() {

        let indiceAleatorio  = Math.floor(Math.random() * miArray.length); //LISTO los escojo

        elementosSelecanterior.push(indiceAleatorio);                      //guado el indice en global              
        let elementoSeleccionado = miArray[indiceAleatorio];               //al guardo indice seleccionado


        if ( miArray.length === 2) { Swal.fire('Cuidado, queda un Coder');}
        if ( miArray.length === 1) { Swal.fire("El ultimo coder");}
        if ( miArray.length === 0) {   
          Swal.fire("Todos han sido Seleccionados");
            return;
        }

        //set timer pal efecto
        
        setTimeout(function() {   //************************************************TIMER
          

          Swal.fire( elementoSeleccionado + " Ha sido Seleccionado");
        
            //construyo cajita de indice creado
            let crearCajita2 = document.createElement("div"); /*creo variable para guardar div creado */
            crearCajita2.className   = "elemento2";           /*a ese elemento creado le doy un nombre */

            crearCajita2.textContent = elementoSeleccionado;  /*ademas, le doy el contenido del array */
            let contenedordeCajitaAleatoria2 = document.getElementById("contenedor-array-aleatorio2"); /*guardo en una variable la referencia del objeto */
            contenedordeCajitaAleatoria2.appendChild(crearCajita2); /* */

            /*DEebo usar este addevent listener justo despues d crear el elemento para que no cree conflicto */
            crearCajita2.addEventListener("click", function() {
                // Elimino ls cajita directamente
                crearCajita2.remove();
            }); 

            let elementoEliminado = miArray.splice(indiceAleatorio, 1);       //elimino el indice seleccionado del array principal

            console.log(miArray);                //cnsola para monitorear
            console.log(elementosSelecanterior); //cnsola para monitorear

            mostrarArray();                                                   //llamo a la funcion para que mustre el aray principal

            
        }, 850);                  //************************************************TIMER
        
    }
    /******************************************************** */
    /******************************************************** */


    // Mostrar los elementos iniciales
    mostrarArray();

function iniciarTemporizador() {
  // Obtiene todos los elementos en el contenedor
  var elementos = document.querySelectorAll('.elemento');
//temporizador//
  var temporizador;

  function iniciarTemporizador() {
  temporizador = setInterval(moverElemento, 1); // Mueve el elemento cada 1000 milisegundos (1 segundo)
}

function detenerTemporizador() {
  clearInterval(temporizador);
}

  // Mezcla los elementos aleatoriamente
  elementos.forEach(function(elemento) {
    var top = Math.floor(Math.random() * 200);
    var left = Math.floor(Math.random() * 200);
   
    elemento.style.top = top + 'px';
    elemento.style.left = left + 'px';
    
  });
}

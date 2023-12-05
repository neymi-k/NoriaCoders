var container = document.getElementById('container');
var divs = [];

for (var i = 0; i < 20; i++) {
   var div = document.createElement('div');
   div.className = 'circular';
   div.style.width = div.style.height = Math.random() * 100 + 'px'; // tamaño aleatorio
   div.style.top = Math.random() * container.offsetHeight + 'px'; // posición aleatoria
   div.style.left = Math.random() * container.offsetWidth + 'px'; // posición aleatoria
   container.appendChild(div);
   divs.push(div);
}

function isCollide(a, b) {
  var aRect = a.getBoundingClientRect();
  var bRect = b.getBoundingClientRect();

  return !(
      ((aRect.top + aRect.height) < (bRect.top)) ||
      (aRect.top > (bRect.top + bRect.height)) ||
      ((aRect.left + aRect.width) < bRect.left) ||
      (aRect.left > (bRect.left + bRect.width))
  );
}

document.getElementById('btn_init').addEventListener('click', function() {
  divs.forEach(function(div) {
      var newPos = {
          top: Math.random() * container.offsetHeight + 'px',
          left: Math.random() * container.offsetWidth + 'px'
      };

      // Asegurarse de que el nuevo posicionamiento no haga que el div salga del contenedor
      if (parseInt(newPos.top) + div.offsetHeight > container.offsetHeight) {
          newPos.top = container.offsetHeight - div.offsetHeight + 'px';
      }
      if (parseInt(newPos.left) + div.offsetWidth > container.offsetWidth) {
          newPos.left = container.offsetWidth - div.offsetWidth + 'px';
      }

      // Asegurarse de que el nuevo posicionamiento no haga que el div colisione con otro div
      divs.forEach(function(otherDiv) {
          if (div !== otherDiv && isCollide(div, otherDiv)) {
              newPos.top = otherDiv.style.top;
              newPos.left = otherDiv.style.left;
          }
      });

      div.style.top = newPos.top;
      div.style.left = newPos.left;
  });
});

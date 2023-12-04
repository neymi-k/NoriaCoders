import { NewLoad } from "./load.js";

let temporizador;

function moverElemento() {
  let elementos = document.querySelectorAll('.element');
  let posiciones = [];

  elementos.forEach(function (elemento) {
    let top = Math.floor(Math.random() * 200);
    let left = Math.floor(Math.random() * 200);
    let right = Math.floor(Math.random() * 200);
    let bottom = Math.floor(Math.random() * 200);
    let foundSpace = false;

    while (!foundSpace) {
      let seSuperpone = posiciones.some(function (pos) {
        return Math.abs(pos.top - top) < 50 && Math.abs(pos.left - left) < 50 && Math.abs(pos.right - right) < 50 && Math.abs(pos.bottom - bottom) < 50;
      });

      if (!seSuperpone) {
        foundSpace = true;
        elemento.style.top = top + 'px';
        elemento.style.left = left + 'px';
        elemento.style.right = right + 'px';
        elemento.style.bottom = bottom + 'px';
        posiciones.push({ top: top, left: left, right: right, bottom: bottom });
      } else {
        top = Math.floor(Math.random() * 200);
        left = Math.floor(Math.random() * 200);
        right = Math.floor(Math.random() * 200);
        bottom = Math.floor(Math.random() * 200);
      }
    }
  });
}

export default function iniciarTemporizador() {
  temporizador = setInterval(moverElemento, 250);
  let renew = setInterval(NewLoad, 200);
  setTimeout(() => clearInterval(temporizador), 2000);
  setTimeout(() => clearInterval(renew), 2100);
}


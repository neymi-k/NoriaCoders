import { NewLoad } from "./load.js";
let container = document.getElementById('container');
let temporizador;

function generarPosicionAleatoria(elemento, contenedor) {
  // Obtener las dimensiones del contenedor y del elemento
  let anchoContenedor = contenedor.offsetWidth;
  let altoContenedor = contenedor.offsetHeight;
  let anchoElemento = elemento.offsetWidth;
  let altoElemento = elemento.offsetHeight;
 
  // Calcular el rango de posiciones aleatorias
  let rangoX = anchoContenedor - anchoElemento;
  let rangoY = altoContenedor - altoElemento;
 
  // Generar una posición aleatoria dentro del rango
  let top = Math.floor(Math.random() * rangoY);
  let left = Math.floor(Math.random() * rangoX);

  console.log(rangoX, rangoY, top, left)
 
  return { top: top, left: left };
 }
 

function moverElemento() {
 let elementos = document.querySelectorAll('.element');
 let posicionesOcupadas = [];

 elementos.forEach(function (elemento) {
   let posicion = generarPosicionAleatoria(elemento, container);
   let foundSpace = false;

   while (!foundSpace) {
     let seSuperpone = posicionesOcupadas.some(function (pos) {
       return Math.abs(pos.top - posicion.top) < 50 && Math.abs(pos.left - posicion.left) < 50 ;
     });

     if (!seSuperpone) {
       foundSpace = true;
       elemento.style.top = posicion.top + 'px';
       elemento.style.left = posicion.left + 'px';
       posicionesOcupadas.push(posicion);
     } else {
       posicion = generarPosicionAleatoria(elemento, container);
     }
   }
 });
}

export default function iniciarTemporizador() {
  temporizador = setInterval(moverElemento, 150);
  // let renew = setInterval(NewLoad, 200);
  setTimeout(() => clearInterval(temporizador), 2000);
  // setTimeout(() => clearInterval(renew), 2100);
}


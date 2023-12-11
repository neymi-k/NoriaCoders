import LoadUser from "./load.js";
import iniciarTemporizador, { addUser, reloadUsers } from "./main.js";
import { users } from "./users.js";


const btn_init = document.querySelector('.btn_init');
const btn_refresh = document.querySelector('.btn_refresh');
const modal = document.querySelector('.modal');
const modal_close = document.querySelector('.modal__close');
const btn_add = document.querySelector('.btn_add');

// const contain = document.getElementById('container');
// const userSelected = document.querySelector('.element');

window.onload = () => LoadUser(users)

// console.log(userSelected.id)

let playto = document.getElementById('playto');


function playStart() {
  playto.play();
}


btn_init.addEventListener("click", (e) =>{
  e.preventDefault()
  playStart()
  iniciarTemporizador();
});

let addgamer = document.getElementById('addgamer');


function AddGamer() {
  addgamer.play();
}

btn_add.addEventListener("click", (e)=> {
  e.preventDefault()
  addUser()
  AddGamer();
});

let restartgames = document.getElementById('restartgame');

function restartGame(){
  restartgames.play();
}

btn_refresh.addEventListener("click", (e)=> {
  e.preventDefault()
  restartGame()
  reloadUsers()
});

modal_close.addEventListener("click", (e) =>{
  e.preventDefault()
  modal.classList.remove('modal--show')
});

// userSelected.addEventListener("click", (e) =>{
//   e.preventDefault()
//   console.log(userSelected.id)
// })

let winner_sound = document.getElementById('winner_sound');

function winnerGame(){
  winner_sound.play();
}

let modal_card = document.getElementById('modal__cards');
modal_card.addEventListener('mouseover',function(){
  console.log('hola');
   winnerGame()
  } )



import LoadUser from "./load.js";
import iniciarTemporizador, { addUser, deletedUser, reloadUsers } from "./main.js";
import { users } from "./users.js";


const btn_init = document.querySelector('.btn_init');
const btn_refresh = document.querySelector('.btn_refresh');
const modal = document.querySelector('.modal');
const modal_close = document.querySelector('.modal__close');
const btn_add = document.querySelector('.btn_add');

window.onload = () => LoadUser(users)

let playto = document.getElementById('playto');
function playStart() {
  playto.play();
}

btn_init.addEventListener("click", (e) => {
  e.preventDefault()
  playStart()
  startGame();
});

let addgamer = document.getElementById('addgamer');
function Add_Sound_Gamer() {
  addgamer.play();
}

btn_add.addEventListener("click", (e) => {
  e.preventDefault()
  Add_Sound_Gamer()
  addUser()
});

let restartgames = document.getElementById('restartgame');
function restart_sound_Game(){
  restartgames.play();
}

btn_refresh.addEventListener("click", (e) => {
  e.preventDefault()
  restart_sound_Game()
  reloadUsers()
});

modal_close.addEventListener("click", (e) => {
  e.preventDefault()
  modal.classList.remove('modal--show')
});

// Añade un controlador de eventos click al contenedor
let contenedor = document.getElementById("container");
contenedor.addEventListener("click", deletedUser);

let winner_sound = document.getElementById('winner_sound');
function winner_sound_Game(){
  winner_sound.play();
}

let modal_card = document.getElementById('modal__card');
modal_card.addEventListener('mouseover', function(){
  winner_sound_Game()
})

import LoadUser from "./load.js";
import iniciarTemporizador, { addUser, deletedUser, reloadUsers } from "./main.js";
import { users } from "./users.js";


const btn_init = document.querySelector('.btn_init');
const btn_refresh = document.querySelector('.btn_refresh');
const modal = document.querySelector('.modal');
const modal_close = document.querySelector('.modal__close');
const btn_add = document.querySelector('.btn_add');

window.onload = () => LoadUser(users)

btn_init.addEventListener("click", (e) => {
  e.preventDefault()
  iniciarTemporizador();
});

btn_add.addEventListener("click", (e) => {
  e.preventDefault()
  addUser()
});

btn_refresh.addEventListener("click", (e) => {
  e.preventDefault()
  reloadUsers()
});

modal_close.addEventListener("click", (e) => {
  e.preventDefault()
  modal.classList.remove('modal--show')
});

// Añade un controlador de eventos click al contenedor
let contenedor = document.getElementById("container");
contenedor.addEventListener("click", deletedUser);

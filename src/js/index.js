import LoadUser from "./load.js";
import iniciarTemporizador, { reloadUsers } from "./main.js";
import { users } from "./users.js";


const btn_init = document.querySelector('.btn_init');
const btn_refresh = document.querySelector('.btn_refresh');
const modal = document.querySelector('.modal');
const modal_close = document.querySelector('.modal__close');

window.onload = () => LoadUser(users)


btn_init.addEventListener("click", (e) =>{
  e.preventDefault()
  iniciarTemporizador();
});

btn_refresh.addEventListener("click", (e)=> {
  e.preventDefault()
  reloadUsers()
});

modal_close.addEventListener("click", (e) =>{
  e.preventDefault()
  modal.classList.remove('modal--show')
});
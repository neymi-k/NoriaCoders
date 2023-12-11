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

btn_init.addEventListener("click", (e) =>{
  e.preventDefault()
  iniciarTemporizador();
});

btn_add.addEventListener("click", (e)=> {
  e.preventDefault()
  addUser()
});

btn_refresh.addEventListener("click", (e)=> {
  e.preventDefault()
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
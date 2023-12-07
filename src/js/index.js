import LoadUser from "./load.js";
import iniciarTemporizador from "./main.js";

const btn_init = document.querySelector('.btn_init');




window.onload = () =>{
  LoadUser()
}

btn_init.addEventListener("click", iniciarTemporizador);
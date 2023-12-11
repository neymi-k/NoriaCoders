import LoadUser from "./load.js";
import {users} from "./users.js";

let users_no_winners = users;

let timerElement;

let winner = document.getElementById("modal__win");
const modal = document.querySelector('.modal');

let maxWidth = window.innerWidth;

function moveElement() {
    let gridPositions = {};
    let elements = document.querySelectorAll('.element');
    let cols, rows

    if(maxWidth > 320) {
        cols = 4
        rows = 6
    }
    else{
        cols = 3
        rows = 8
    }

    elements.forEach(item => {
        let randomColumn = Math.floor(Math.random() * cols) + 1;
        let randomRow = Math.floor(Math.random() * rows) + 1;

        // Verifica si la posición ya está ocupada
        while (gridPositions[randomColumn + '-' + randomRow]) {
            randomColumn = Math.floor(Math.random() * cols) + 1;
            randomRow = Math.floor(Math.random() * rows) + 1;
        }

        // Si la posición no está ocupada, mueve el elemento y registra su posición
        item.style.gridColumn = randomColumn;
        item.style.gridRow = randomRow;
        gridPositions[randomColumn + '-' + randomRow] = true;
    });
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);   
}

function goWin(winner){
    let listUsers = users_no_winners.filter((user )=> user !== winner);
    return listUsers
}

export function reloadUsers(){
    users_no_winners = users;
    LoadUser(users_no_winners);
}

export function addUser() {         
    /*Obtengo el valor del imput y limpio sus espacios con el trim()*/
    let newUser = document.getElementById("text_user").value.trim();

    /*punto de control para ver si el imput no esta vacio*/
    if (newUser !== "" && !users_no_winners.includes(newUser)) {
        users_no_winners.push(newUser);                         /*agrego el nuevo elmento al array con el metodo push*/
        document.getElementById("text_user").value = ""; /*Limpia el input, estableciendo su valor en una cadena vacía. */
        LoadUser(users_no_winners);
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Coder Agregado',
            showConfirmButton: false,
            timer: 1500
          })
    } else {
        Swal.fire({
            position: 'center',
            icon: 'error',
            title: 'Debes agregar un nombre sin espacios',
            showConfirmButton: false,
            timer: 1500
          })
    }
}

export function deletedUser(event) {
    // Accede al elemento que ha sido clicado
    let userSelected = event.target;
  
    // Accede al id del elemento clicado
    let userSelectedClick = userSelected.id;

    //eliminio de element0..n la palabra 'element'
    userSelectedClick = userSelectedClick.slice(7, userSelectedClick.lenght)
  
    if (userSelectedClick === "container") return
  
    // Verificar si el elemento está en el array
    if (userSelectedClick >= 0) {
        
        // Eliminar el elemento del DOM
        userSelected.remove();

        // Eliminar el elemento del array
        users_no_winners = users_no_winners.filter(user => user!== (userSelected.textContent).trim()); 
    }
  }

export default function iniciarTemporizador() {
    if(users_no_winners.length === 0){
        Swal.fire({
            position: 'center',
            icon: 'error',
            title: 'Debes agregar usuarios al juego',
            showConfirmButton: false,
            timer: 1500
          })
        return
    }
    else if(users_no_winners.length === 1) {
        Swal.fire({
            position: 'center',
            icon: 'info',
            title: 'Último usuario en el juego',
            showConfirmButton: false,
            timer: 1500
          })
    }

    timerElement = setInterval(moveElement, 100);

    setTimeout(() => {
        clearInterval(timerElement)
        let number_win = getRandomInt(0, users_no_winners.length - 1)
        winner.textContent = users_no_winners[number_win]
        users_no_winners = goWin(users_no_winners[number_win])
        LoadUser(users_no_winners);
        
    }, 4000);

    setTimeout(() => modal.classList.add('modal--show'), 4200);
}

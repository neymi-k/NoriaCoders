let container = document.getElementById('container');

let users = ['Alicia','Marcela', 'Neymi', 'Alvaro','Jander', 'José', 'Roxana', 'Joaco', 'Alfredo', 'Elena', 'Isaac']
let colors = ['#160FF2','#B856A4','#494078','#673CE1','#8D3CC0']

function randomNumbers(arrObject){
  return Math.floor(Math.random() * ((arrObject.length - 1) - 0 + 1 ) + 0)
}

function numbers_azar(arrObject){
  const result = []
  let number
  while (result.length < arrObject.length) {
    number = randomNumbers(arrObject)
    if (!result.includes(arrObject[number])) result.push(arrObject[number])
  }
  return result
}

export default function LoadUser() {
  container.innerHTML = ""
  let userHtml =''
  let color_random = numbers_azar(colors)
  users.forEach( (user,index) =>{
    userHtml += `<div class="element" style="background-color:${color_random[index]}" id="element${index}">
     ${user}
    </div>`
  })
  container.innerHTML = userHtml;
  
 }

 export function NewLoad() {
    container.innerHTML = ""
    let userHtml =''
    let newUsers = numbers_azar(users)
    let color_random = numbers_azar(colors)
    console.log(newUsers)
    newUsers.forEach( (user,index) =>{
    userHtml += `<div class="element"  style="background-color:${color_random[index]}; inset:''" id="element${index}">${user}</div>`
    })
    container.innerHTML = userHtml;
 }


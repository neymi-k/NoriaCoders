let container = document.getElementById('container');

let users = ['Alicia','Marcela', 'Neymi', 'Alvaro','Jander', 'José', 'Roxana', 'Joaco', 'Alfredo', 'Elena', 'José', 'Roxana', 'Joaco', 'Alfredo', 'Elena', 'José', 'Roxana', 'Joaco', 'Alfredo', 'Elena']

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
  container.innerHTML = ''
  let userHtml = ''
  let planet = 1
  users.forEach( (user,index) =>{
    if (user.length % 3 === 0) planet = 1
    userHtml += `<div 
                  class="element" 
                  id=element${index}
                  style = "background-image:url(../img/planet${planet++}.png);  color : azure;
                  background-size: cover;
                  background-position: center;"
                 >
                  ${user}
              </div>`
  })
  container.innerHTML = userHtml;
  
 }

 export function NewLoad() {
    container.innerHTML = ""
    let userHtml =''
    let newUsers = numbers_azar(users)
    let planet = 1
    newUsers.forEach( (user,index) =>{
      userHtml += `<div 
                    class = "element" 
                    class="element" 
                    id=element${index}
                    style = "background-image:url(../img/planet${planet++}.png);  color : azure;
                    background-size: cover;
                    background-position: center;"
                   >
                    ${user}
              </div>`
    })
    container.innerHTML = userHtml;
 }


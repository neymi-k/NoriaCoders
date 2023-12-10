let container = document.getElementById('container');

function randomNumbers(arrObject) {
  return Math.floor(Math.random() * ((arrObject.length - 1) - 0 + 1) + 0)
}

function numbers_azar(arrObject) {
  const result = []
  let number
  while (result.length < arrObject.length) {
    number = randomNumbers(arrObject)
    if (!result.includes(arrObject[number])) result.push(arrObject[number])
  }
  return result
}

export default function LoadUser(users) {
  container.innerHTML = ''
  let userHtml = ''
  let planet = 1
  let newUsers = numbers_azar(users)
  newUsers.forEach((user, index) => {
    if (index % 5 === 0) planet = 1
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
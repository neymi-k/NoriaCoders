let temporizador;

function moverElemento() {
    let elementos = document.querySelectorAll('.element');
    let gridPositions = {}; 


    elementos.forEach( item => {
        let randomColumn = Math.floor(Math.random() * 3) + 1;
        let randomRow = Math.floor(Math.random() * 6) + 1;

        // Verifica si la posición ya está ocupada
        while (gridPositions[randomColumn + '-' + randomRow]) {
            randomColumn = Math.floor(Math.random() * 3) + 1;
            randomRow = Math.floor(Math.random() * 7) + 1;
        }

        // Si la posición no está ocupada, mueve el elemento y registra su posición
        item.style.gridColumn = randomColumn;
        item.style.gridRow = randomRow;
        gridPositions[randomColumn + '-' + randomRow] = true;
    });

}

export default function iniciarTemporizador() {
    temporizador = setInterval(moverElemento, 100);
    setTimeout(() => clearInterval(temporizador), 2000);
}

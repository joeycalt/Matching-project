const createBoard= document.querySelector('.gameboard');
const gameboardWrapper = document.querySelector('#gameboard-wrapper');
const cells = document.querySelectorAll('#cell');
const resetButton = document.querySelector ('.reset');
let gameOn = true;
let startButton = document.querySelector ('.start')
let playerWins = 'You Win!';
let playerLoses = 'You Lose!';
let matches = document.querySelector('.matches');
let timer = document.querySelector('.timer');
let player;
let emojis = ['😎','🥸','🥳','🤠','🤌','🤙','👀','🐶','😎','🥸','🥳','🤠','🤌','🤙','👀','🐶'];
let tileArray = [];
let cardsSelected = [];
let cardsWon = [];
let clicks = [];
let cardsSelectedId = []; 
cardsChosen = [];
let firstClick = '';
let secondClick = '';
let clicksCounter = 0;
let face = document.querySelectorAll('.face');


// __________________________________________________________________//
// CODE:
// |
// |
// |
// v


// keep cards matched and return cards not matched
cells.forEach((cell)=> {
    cell.addEventListener('click', () => {
        cell.classList.add('clicked');

        if(counter === 0) {
            firstClick = cell.push('dateset');
            counter++;
        } else {
            secondClick = cell.push('dataset');
            counter = 0;
        }
        console.log(secondClick);
        console.log(firstClick);

        if(firstClick === secondClick) {
            const correctCells = document.querySelectorAll(
                ".cell[face='" + firstClick + "']"
                );
                correctCells[0].classList.add('checked');
                correctCells[0].classList.remove('clicked');
                correctCells[1].classList.add('checked');
                correctCells[1].classList.remove('clicked');
        } else  {
            const incorrectCells = document.querySelectorAll('.cell.clicked');
            incorrectCells[0].classList.add('shake');
            incorrectCells[1].classList.add('shake');

            setTimeout(() => {
                incorrectCells[0].classList.remove('shake');
                incorrectCells[0].classList.remove('clicked');
                incorrectCells[1].classList.remove('shake');
                incorrectCells[1].classList.remove('clicked');
            }, 800)

        }
    })
})





// start game only when start is pressed




// flip card when clicked
const cards = document.querySelectorAll('#cells');

cards.forEach((card) => {

}) 



// create game board
function board() {
    for(let i = 0; i < emojis.length; i++);
    let card = document.createElement('text');
    card.setAttribute('emojis');
    card.setAttribute('data-id', i);
    card.addEventListener('click', flipCard);
    board.appendChild(card);
}


// 
function move(evt) {
    currentFace = evt.target.dataset.card
    // console.log(emojis[currentEmoji])
    if (evt.target.innerHTML === 'face') {

    } 
} 

// randomly put emojis into cards
cells.forEach((cell, index)=> {
    cell.addEventListener('click', move )
let randomItem = face[Math.floor(Math.random() * face.length)]; {
cell.setAttribute('data-card', index)
}
}) 
console.log(cells)

// shuffle array of emojis
let shuffledEmojis = emojis.sort(function () {
    return Math.random() - 0.5;
});
console.log(shuffledEmojis);

const tiles = [...document.querySelectorAll('#cells')];
for(const tile of tiles) {
    console.log(tile)
    tile.addEventListener('click', viewCard)
}

// start timer to countdown time from 45 seconds and alerting player
document.querySelector('.start').addEventListener('click', function() {
    let counter = 45;
    setInterval( function () {
        counter--;
        if(counter >=0) {
            span = document.querySelector('.start');
            span.innerHTML = counter;
        }
        if (counter === 0) {
            alert('Sorry, Time ran out!');
            clearInterval(counter);
        }
    }, 1000);
    
}, {once: true})

// reseting start timer back to 45 seconds after game ends
resetButton.onclick = reloadPage;

function reloadPage() {
    window.location.reload();
}

// declaring matched cards
let counter = 1;
let wrong = false;
for (let i = 0; i < emojis.length; i++) {
    // emojis[i].addEventListener('click');
}
function proceed() {
    firstClick.classList.toggle('open');
    secondClick.classList.toggle('open');
    wrong = false;
}
function flipOver(e) {
    if (!wrong) {
        let element = e.currentTarget;
        e.target.classList.toggle('open');
        if(counter == 1) {
            firstClick = element;
            counter = 2;
        } else if (counter == 2) { 
            secondClick = element;
            let card1Type = firstClick.getElementsByTagName('i')[0].className;
            let card2Type = secondClick.getElementsByTagName('i')[0].className;
            if(card1Type == card2Type) {
                firstClick.removeEventListener('click', flipOver);
                secondClick.removeEventListener('click', flipOver);

            } else {
                wrong = true;
                setTimeout(proceed, 1000)
            }
            counter = 1;
        } 
    }
}











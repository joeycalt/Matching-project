const createBoard= document.querySelector('.gameboard');
const gameboardWrapper = document.querySelector('#gameboard-wrapper');
const cells = document.querySelectorAll('#cell');
const resetButton = document.querySelector ('.reset');
let gameOn = true;
let startButton = document.querySelector ('.start')
let playerWins = 'You Win!';
let playerLoses = 'You Lose!';
let flips = document.querySelector('.flips');
let timer = document.querySelector('.timer');
let player;
let emojis = ['😎','🥸','🥳','🤠','🤌','🤙','👀','🐶','😎','🥸','🥳','🤠','🤌','🤙','👀','🐶'];
let tileArray = [];
let cardsSelected = [];
let cardsWon = [];
let count = 0;
let cardsSelectedId = []; 
let cardsChosen = [];
let firstClick = [];
let secondClick = [];
let clicksCounter = 0;
let isFlipped = false;
let lock = false;
letFlipsBox = document.querySelector('.flips-box')


// __________________________________________________________________//
// CODE:
// |
// |
// |
// v

gameboardWrapper.addEventListener('click', function () {
    count += 1;
    document.querySelector('.flips-box').innerText = count;
    console.log(count);
});




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





// choose card 
function move(evt) {
    currentFace = evt.target.dataset.card
    // console.log(emojis[currentEmoji])
    if (evt.target.innerHTML === 'face') {

    } 
} 

//shuffle array of emojis
let shuffledEmojis = emojis.sort(function () {
    return Math.random() - 0.5;
});
console.log(shuffledEmojis);

const tiles = [...document.querySelectorAll('#cells')];
for(const tile of tiles) {
    console.log(tile)
    tile.addEventListener('click', viewCard)
}


// keep cards matched and return cards not matched

cells.forEach((cell)=> {
    currentEmoji = 
    cell.addEventListener('click', () => {
        cell.classList.add('clicked');

        if(counter === 0) {
            firstClick = shuffledEmojis[''];
            counter++;
        } else {
            secondClick = shuffledEmojis[''];
            counter = 0;
        }
        
        if(firstClick === secondClick) {
            const correctCells = document.querySelectorAll(
                ".cell[shuffledEmojis='" + firstClick + "']"
                );
                correctCells[0].classList.add('checked');
                correctCells[0].classList.remove('clicked');
                correctCells[1].classList.add('checked');
                correctCells[1].classList.remove('clicked');
            }
            
            
            
            console.log(firstClick);
            console.log(secondClick);
        }
)


// create game board
function board() {
    for(let i = 0; i < emojis.length; i++);
    let card = document.createElement('text');
    card.setAttribute('emojis');
    card.setAttribute('data-id', i);
    card.addEventListener('click', flipCard);
    board.appendChild(card);
}

// reseting start timer back to 45 seconds after game ends
resetButton.onclick = reloadPage;

function reloadPage() {
    window.location.reload();
}

// declaring matched cards
let counterTwo = 1;
let wrong = false;
for (let i = 0; i < emojis.length; i++) {
    // emojis[i].addEventListener('click');
}
function proceed() {
    firstClick.classList.toggle('open');
    secondClick.classList.toggle('open');
    wrong = false;
}

}, {once: true})})

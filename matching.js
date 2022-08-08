const createBoard= document.querySelector('.gameboard');
const gameboardWrapper = document.querySelector('#gameboard-wrapper');
const cells = document.querySelectorAll ('#cell');
const resetButton = document.querySelector ('.reset');
let gameOn = true;
const startButton = document.querySelector ('.start')
let playerWins = 'You Win!';
let playerLoses = 'You Lose!';
let matches = document.querySelector('.matches');
let timer = document.querySelector('.timer');
let player;
const emojis = ['😎','🥸','🥳','🤠','🤌','🤙','👀','🐶'];
let tileArray = [];
let cardsSelected = [];
let cardsWon = 0;
let clicks = 0;

function move(evt) {
    console.log(evt.target)
    if (evt.target.innerHTML === 'emojis') {

    } console.log('Player Chose Tile')
} 

cells.forEach(cell=> {
    cell.addEventListener('click', move )
let randomItem = emojis[Math.floor(Math.random() * emojis.length)]; {
cells.innerHTML = 'emojis';
}
}) 
console.log(cells)

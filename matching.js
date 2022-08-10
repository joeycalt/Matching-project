const createBoard= document.querySelector('.gameboard');
const wrappers = document.querySelector('#gameboard-wrapper');
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
let firstClick;
let secondClick;
let clicksCounter = 0;
let isFlipped = false;
let lock = false;
letFlipsBox = document.querySelector('.flips-box')
let boxZero = document.querySelector('.box_zero')
let boxOne = document.querySelector('.box_one')
let boxTwo = document.querySelector('.box_two')
let boxThree = document.querySelector('.box_three')
let boxFour = document.querySelector('.box_four')
let boxFive = document.querySelector('.box_five')
let boxSix = document.querySelector('.box_six')
let boxSeven = document.querySelector('.box_seven')
let boxEight = document.querySelector('.box_eight')
let boxNine = document.querySelector('.box_nine')
let boxTen = document.querySelector('.box_ten')
let boxEleven = document.querySelector('.box_eleven')
let boxTwelve = document.querySelector('.box_twelve')
let boxThirteen = document.querySelector('.box_thirteen')
let boxFourteen = document.querySelector('.box_fourteen')
let boxFifteen = document.querySelector('.box_fifteen')
// __________________________________________________________________//
// CODE:
// |
// |
// |
// v

function move(e) {
    currentFace = e.target.dataset.card
    console.log(emojis[currentEmoji])
    if (e.target.innerHTML === 'face');
} 




// reset game and page
resetButton.onclick = reloadPage;

function reloadPage() {
    window.location.reload();
}





// flips counter
wrappers.addEventListener('click', function () {
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
}, {once: true})






// shuffle array of emojis
let shuffledEmojis = emojis.sort(function () {
    return Math.random() - 0.5;
});
console.log(shuffledEmojis);


let newEmojis = shuffledEmojis;
cells.forEach((cell) => {
    boxZero.innerHTML = newEmojis[0];
    boxOne.innerHTML = newEmojis[1];
    boxTwo.innerHTML = newEmojis[2];
    boxThree.innerHTML = newEmojis[3];
    boxFour.innerHTML = newEmojis[4];
    boxFive.innerHTML = newEmojis[5];
    boxSix.innerHTML = newEmojis[6];
    boxSeven.innerHTML = newEmojis[7];
    boxEight.innerHTML = newEmojis[8];
    boxNine.innerHTML = newEmojis[9];
    boxTen.innerHTML = newEmojis[10];
    boxEleven.innerHTML = newEmojis[11];
    boxTwelve.innerHTML = newEmojis[12];
    boxThirteen.innerHTML = newEmojis[13];
    boxFourteen.innerHTML = newEmojis[14];
    boxFifteen.innerHTML = newEmojis[15];

}) 




// keep cards matched and return cards not matched
function flipCard () {
    this.classList.add('flip');
    
    if(!isFlipped) {
        isFlipped = true;
        firstClick = this;
        return;
    } else {
        isFlipped = false;
        secondClick = this;
        
        if (firstClick === secondClick) {
            firstClick.removeEventListener('click', flipCard);
            secondClick.removeEventListener('click', flipCard);
        } else {
            setTimeout(() => {
                firstClick.classList.remove('flip');
                secondClick.classList.remove('flip');
            }, 1500);
            
        }
    }
    cells.forEach(cell => cell.addEventListener('click', flipCard));


    }
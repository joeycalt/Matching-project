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
let firstClick, secondClick;
let clicksCounter = 0;
let isFlipped = false;
let lockBoard = false;
let FlipsBox = document.querySelector('.flips-box')
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
const audio = new Audio ("https://www.fesliyanstudios.com/play-mp3/5450")
let winGame = document.querySelector('.win');
let lostGame = document.querySelector('.lost');

// __________________________________________________________________//
// CODE:
// |
// |
// |
// v






// start timer to countdown time from 45 seconds and alerting player
document.querySelector('.start').addEventListener('click', function() {
audio.play();
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


   // flip cards
cells.forEach(cell => cell.addEventListener('click', flipCard))


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
   
   // compare cards

   function flipCard() {
    this.classList.add('flip');
    
    if (!isFlipped) {
        isFlipped= true;
        firstClick = this;

        console.log({isFlipped, firstClick})
    } else {
        isFlipped = false;
        secondClick= this;

        console.log({firstClick, secondClick}) 
        console.log(firstClick.innerHTML);
        console.log(secondClick.innerHTML)
    
    // checking for match and not matched
    let isMatch = firstClick.innerHTML === secondClick.innerHTML;
    if(firstClick.innerHTML === secondClick.innerHTML) {
        firstClick.removeEventListener('click', flipCard);
        secondClick.removeEventListener('click', flipCard);
        setTimeout(function(){alert('Its A Match!');}, 1100)
    }
        if(isMatch) {
            clicksCounter +=1;
            if(clicksCounter == (shuffledEmojis.length/2)) {
                setTimeout(function(){alert('Congrats! You Win!!!');}, 1600)
            }
        
    } else {
        setTimeout(() => {
            firstClick.removeEventListener('click',flipCard);
            secondClick.removeEventListener('click', flipCard);
            alert('Not a match! Try Again!')
        })
    }
           
        
         
    } 
    } 

    


    // flips counter
wrappers.addEventListener('click', function () {
        count += 1;
        document.querySelector('.flips-box').innerText = count;
        console.log(count);
    });
    
    
    
    
// shuffle array of emojis
let shuffledEmojis = emojis.sort(function () {
        return Math.random() - 0.5;
    });
    
    console.log(shuffledEmojis);
    
 
    // place emojis in cards and hide
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
    
 document.querySelector('.box_zero').addEventListener('click', () => {
        boxZero.style.textIndent = '0' ;
        
    })
    
document.querySelector('.box_one').addEventListener('click', () => {
        boxOne.style.textIndent = '0' ;
    })

document.querySelector('.box_two').addEventListener('click', () => {
        boxTwo.style.textIndent = '0' ;
    })

document.querySelector('.box_three').addEventListener('click', () => {
        boxThree.style.textIndent = '0' ;
    })

document.querySelector('.box_four').addEventListener('click', () => {
        boxFour.style.textIndent = '0' ;
    })

document.querySelector('.box_five').addEventListener('click', () => {
        boxFive.style.textIndent = '0' ;
    })

document.querySelector('.box_six').addEventListener('click', () => {
        boxSix.style.textIndent = '0' ;
    })

document.querySelector('.box_seven').addEventListener('click', () => {
        boxSeven.style.textIndent = '0' ;
    })

document.querySelector('.box_eight').addEventListener('click', () => {
        boxEight.style.textIndent = '0' ;
    })

document.querySelector('.box_nine').addEventListener('click', () => {
        boxNine.style.textIndent = '0' ;
    })

document.querySelector('.box_ten').addEventListener('click', () => {
        boxTen.style.textIndent = '0' ;
    })

document.querySelector('.box_eleven').addEventListener('click', () => {
        boxEleven.style.textIndent = '0' ;
    })

document.querySelector('.box_twelve').addEventListener('click', () => {
        boxTwelve.style.textIndent = '0' ;
    })

document.querySelector('.box_thirteen').addEventListener('click', () => {
        boxThirteen.style.textIndent = '0' ;
    })

document.querySelector('.box_fourteen').addEventListener('click', () => {
        boxFourteen.style.textIndent = '0' ;
    })

document.querySelector('.box_fifteen').addEventListener('click', () => {
        boxFifteen.style.textIndent = '0' ;
    })
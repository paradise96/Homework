const computerChoiceDisplay = document.getElementById('computer-choice');
const userChoiceDisplay = document.getElementById('user-choice');
const resultDisplay = document.getElementById('result');
const possibleChoices = document.querySelectorAll('button');
let userChoose;
let computerChoice;
let result;


possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', function(e){
   userChoose = e.target.id;
   userChoiceDisplay.innerHTML = userChoose;
   generateComputerChoice();
   getResult();
}));

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3) + 1;
    if(randomNumber === 1) {
        computerChoice = 'rock';
    }
    if(randomNumber === 2) {
        computerChoice = 'scissors';
    }
    if(randomNumber === 3) {
        computerChoice = 'paper';
    }
   computerChoiceDisplay.innerHTML = computerChoice;
}

function getResult() {
    if(computerChoice === userChoose) {//
        resultDisplay.innerHTML = "It's a draw";
        return;
    }
    if((computerChoice === 'rock' && userChoose === 'scissors') || (computerChoice === 'scissors' && userChoose === 'paper') || (computerChoice === 'paper' && userChoose === 'rock')) {//
        result = 'you lose!';
    } else {
        result = 'you win!';
    }
    // if(computerChoice === 'rock' && userChoose === 'paper') {//
    //     result = 'you win!';
    // }
    // if(computerChoice === 'scissors' && userChoose === 'rock') {//
    //     result = 'you win!';
    // }
    // if(computerChoice === 'paper' && userChoose === 'scissors') {
    //     result = 'you win!';
    // }
    resultDisplay.innerHTML = result;
}
//////

const cardArray = [
    {
        name: 'fries',
        img: 'images/fries.png',
    },
    {
        name: 'cheeseburger',
        img: 'images/cheeseburger.png',
    },
    {
        name: 'hotdog',
        img: 'images/hotdog.png',
    },
    {
        name: 'icecream',
        img: 'images/ice-cream.png',
    },
    {
        name: 'milkshake',
        img: 'images/milkshake.png',
    },
    {
        name: 'pizza',
        img: 'images/pizza.png',
    },
    {
        name: 'fries',
        img: 'images/fries.png',
    },
    {
        name: 'cheeseburger',
        img: 'images/cheeseburger.png',
    },
    {
        name: 'hotdog',
        img: 'images/hotdog.png',
    },
    {
        name: 'icecream',
        img: 'images/ice-cream.png',
    },
    {
        name: 'milkshake',
        img: 'images/milkshake.png',
    },
    {
        name: 'pizza',
        img: 'images/pizza.png',
    },
];

cardArray.sort(() => 0.5 - Math.random());

const gridDisplay = document.querySelector('#grid');
let resultM = document.querySelector('#resultM');
let cardChosen = [];
let cardsChosenIds = [];
const cardsWon = [];

function createBoard () {
    for (let i = 0; i < cardArray.length; i++) {
      const card = document.createElement('img');
      card.setAttribute('src', 'images/blank.png');
      card.setAttribute('data-id', i);
      card.addEventListener('click', flipCard);
      gridDisplay.appendChild(card);
    }
}


function checkMatch() {
    const cards = document.querySelectorAll('#grid img');
    const optionOne = cardsChosenIds[0];
    const optionTwo = cardsChosenIds[1];
    if (optionOne == optionTwo) {
        cards[optionOne].setAttribute('src', 'images/blank.png');
        cards[optionTwo].setAttribute('src', 'images/blank.png');
        alert('You click the same card!');
    }
    if(cardChosen[0] === cardChosen[1]){
        alert('You found a match');
        cards[optionOne].setAttribute('src', 'images/white.png');
        cards[optionTwo].setAttribute('src', 'images/white.png');
        cards[optionOne].removeEventListener('click', flipCard);
        cards[optionTwo].removeEventListener('click', flipCard);
        cardsWon.push(cardChosen);
    } else {
        cards[optionOne].setAttribute('src', 'images/blank.png');
        cards[optionTwo].setAttribute('src', 'images/blank.png');
        // alert('Sorry try again');
    }
    resultM.textContent = cardsWon.length;
    cardChosen = [];
    cardsChosenIds = [];

    if(cardsWon.length === (cardArray.length/2)) {
        resultM.innerHTML = 'Congratulations! You found them all!';
    }
}

function flipCard () {
    const cardId = this.getAttribute('data-id');
    cardChosen.push(cardArray[cardId].name);
    cardsChosenIds.push(cardId);
    this.setAttribute('src', cardArray[cardId].img);
    if(cardChosen.length === 2){
        setTimeout(checkMatch, 1000);
    }
}
createBoard();

//Whack-a-mole !!!
const squares = document.querySelectorAll('.square');
const mole = document.querySelector('.mole');
const timeLeft = document.querySelector('#time-left');
const score = document.querySelector('#score');
let resultW = 0;
let hitPosition;
let currentTime = 60;
let timerId = null;
let countDownTimeId;
function randomSquare() {
    squares.forEach(square => {
        square.classList.remove('mole');
    });
    let timing = 2000;
    if(currentTime < 40) {
        timing = 1500;
    }
    if(currentTime < 20) {
        timing = 1000;
    }
    let randomSquare1 = squares[Math.floor(Math.random()* 9)];
    randomSquare1.classList.add('mole');
    hitPosition = randomSquare1.id;
    let timeCount;
    if(currentTime > 0){
        timeCount = setTimeout(function(){randomSquare();}, timing);
    } else {
        clearTimeout(timeCount);
        clearInterval(countDownTimeId);
        // !!!!!!!!!!!!!! CHANGE IT FOR TOAST AND MAKE IT ON CLICK OF THE BUTTON!
        // alert('game is over! Your score is ' + resultW);
    }
}

squares.forEach(square => {
    square.addEventListener('mousedown', () =>{
        if(square.id === hitPosition){
            resultW++;
            score.textContent = resultW;
            hitPosition = null;
        }
    });
});
function moveMole(){
    countDownTimeId = setInterval(renderTime, 1000);
    randomSquare();
}
moveMole();
function renderTime(){
    currentTime--;
    timeLeft.textContent = currentTime;
}
// function countDown() {
//     if(currentTime < 40){
//         clearInterval(timerId);
//         timerId = setInterval(randomSquare, 1500);
//     }
//     if(currentTime < 20) {
//         clearInterval(timerId);
//         timerId = setInterval(randomSquare, 1000);
//     }
//     if(currentTime === 0){
//         clearInterval(timerId);
//         // clearInterval(countDownTimeId);
//         // alert('game is over! Your score is ' + resultW);
//     }
// }
const gridBreakout = document.querySelector('.gridBreakout');
const scoreR = document.querySelector('#scoreR');
const blockWidth = 100;
const blockHeight = 20;
const boardWidth = 560;
const boardHeight = 300;
const ballDiameter = 20;
const userStart = [230 ,10];

let currentPosition = userStart;
const ballStart = [270, 40];
let ballCurrentPosition = ballStart; 
let timerId1;
let xDirection = 2;
let yDirection =2;
let scoreBreakout = 0;
//create a Block
class Block {
    constructor (xAxis, yAxis) {
        this.bottomLeft = [xAxis, yAxis];
        this.bottomRight = [xAxis + blockWidth, yAxis];
        this.topLeft = [xAxis, yAxis + blockHeight];
        this.topRight = [xAxis + blockWidth, yAxis + blockHeight];
    }
}
//all my blocks
const blocks = [
    new Block(10, 270),
    new Block(120, 270),
    new Block(230, 270),
    new Block(340, 270),
    new Block(450, 270),
    new Block(10, 240),
    new Block(120, 240),
    new Block(230, 240),
    new Block(340, 240),
    new Block(450, 240),
    new Block(10, 210),
    new Block(120, 210),
    new Block(230, 210),
    new Block(340, 210),
    new Block(450, 210),
   
];
//draw a block
function addBlock (){
    
    for (let i = 0; i < blocks.length; i++) {
    const block = document.createElement('div');
    block.classList.add('block');
    block.style.left = blocks[i].bottomLeft[0] + 'px';
    block.style.bottom = blocks[i].bottomLeft[1] + 'px';
    gridBreakout.appendChild(block);
    }
}
addBlock();

//add user 
const user = document.createElement('div');
user.classList.add('user');
drawUser();
gridBreakout.appendChild(user);
//drawUser 
function drawUser() {
    user.style.left = currentPosition[0] + 'px';
    user.style.bottom = currentPosition[1] + 'px';
}
//draw the ball
function drawBall(){
    ball.style.left = ballCurrentPosition[0] + 'px';
    ball.style.bottom = ballCurrentPosition[1] + 'px';
}

//move user 
function moveUser(e) {
 switch(e.key){
    case 'ArrowLeft': 
        if(currentPosition[0] > 0){
            currentPosition[0] -= 10;
            drawUser();
        }
        break;
    case 'ArrowRight': 
        if(currentPosition[0] < 460){
            currentPosition[0] += 10;
            drawUser();
        }
        break;
 }
}
document.addEventListener('keydown', moveUser);

//add ball
const ball = document.createElement('div');
ball.classList.add('ball');
drawBall();
gridBreakout.appendChild(ball);

//move the ball
function moveBall() {
    ballCurrentPosition[0] +=xDirection;
    ballCurrentPosition[1] +=yDirection;
    drawBall();
    checkCollisions();
}
timerId1 = setInterval(moveBall, 30);

//check for collisions
function checkCollisions() {
    //check for block collisions
    for (let i = 0; i< blocks.length; i++) {
      
      if(
        (ballCurrentPosition[0] > blocks[i].bottomLeft[0] && ballCurrentPosition[0] < blocks[i].bottomRight[0]) &&
        ((ballCurrentPosition[1] + ballDiameter) > blocks[i].bottomLeft[1] && ballCurrentPosition[1] < blocks[i].topLeft[1]) 
      ){
        const allBlocks = Array.from(document.querySelectorAll('.block'));
        allBlocks[i].classList.remove('block');
        blocks.splice(i, 1);
        changeDirection();
        scoreBreakout++;
        scoreR.innerHTML = scoreBreakout;
      }
       
    }
    //check for wall collisions
    if(
        ballCurrentPosition[0] >= (boardWidth - ballDiameter) || 
        ballCurrentPosition[1] >= (boardHeight -ballDiameter) || 
        ballCurrentPosition[0] <= 0
        ){
        changeDirection();
    }

    //change for game over
    if(ballCurrentPosition[1] <= 0){
        clearInterval(timerId1);
        scoreR.innerText = 'You lose';
        document.removeEventListener('keydown', moveUser);
    }
}
function changeDirection(){
     if(xDirection ===2 && yDirection ===2){
         yDirection = -2;
         return; 
     }
     if(xDirection == 2 && yDirection == -2){
        xDirection = -2;
        return;
     }
    if(xDirection == -2 && yDirection == -2){
        yDirection = 2;
        return;
    }
    if(xDirection === -2 && yDirection ===2){
        xDirection = 2;
        return;
    }
}

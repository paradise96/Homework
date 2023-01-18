"use strict";

var computerChoiceDisplay = document.getElementById('computer-choice');
var userChoiceDisplay = document.getElementById('user-choice');
var resultDisplay = document.getElementById('result');
var possibleChoices = document.querySelectorAll('button');
var userChoose;
var computerChoice;
var result;
possibleChoices.forEach(function (possibleChoice) {
  return possibleChoice.addEventListener('click', function (e) {
    userChoose = e.target.id;
    userChoiceDisplay.innerHTML = userChoose;
    generateComputerChoice();
    getResult();
  });
});

function generateComputerChoice() {
  var randomNumber = Math.floor(Math.random() * 3) + 1;

  if (randomNumber === 1) {
    computerChoice = 'rock';
  }

  if (randomNumber === 2) {
    computerChoice = 'scissors';
  }

  if (randomNumber === 3) {
    computerChoice = 'paper';
  }

  computerChoiceDisplay.innerHTML = computerChoice;
}

function getResult() {
  if (computerChoice === userChoose) {
    result = "It's a draw";
  }

  if (computerChoice === 'rock' && userChoose === 'scissors') {
    result = 'you lose!';
  }

  if (computerChoice === 'rock' && userChoose === 'paper') {
    result = 'you win!';
  }

  if (computerChoice === 'scissor' && userChoose === 'paper') {
    result = 'you lose!!';
  }

  if (computerChoice === 'scissors' && userChoose === 'rock') {
    result = 'you win!';
  }

  if (computerChoice === 'paper' && userChoose === 'rock') {
    result = 'you lose!';
  }

  if (computerChoice === 'paper' && userChoose === 'scissors') {
    result = 'you win!';
  }

  resultDisplay.innerHTML = result;
} //////


var cardArray = [{
  name: 'fries',
  img: 'images/fries.png'
}, {
  name: 'cheeseburger',
  img: 'images/cheeseburger.png'
}, {
  name: 'hotdog',
  img: 'images/hotdog.png'
}, {
  name: 'icecream',
  img: 'images/ice-cream.png'
}, {
  name: 'milkshake',
  img: 'images/milkshake.png'
}, {
  name: 'pizza',
  img: 'images/pizza.png'
}, {
  name: 'fries',
  img: 'images/fries.png'
}, {
  name: 'cheeseburger',
  img: 'images/cheeseburger.png'
}, {
  name: 'hotdog',
  img: 'images/hotdog.png'
}, {
  name: 'icecream',
  img: 'images/ice-cream.png'
}, {
  name: 'milkshake',
  img: 'images/milkshake.png'
}, {
  name: 'pizza',
  img: 'images/pizza.png'
}];
cardArray.sort(function () {
  return 0.5 - Math.random();
});
var gridDisplay = document.querySelector('#grid');
var resultM = document.querySelector('#resultM');
var cardChosen = [];
var cardsChosenIds = [];
var cardsWon = [];

function createBoard() {
  for (var i = 0; i < cardArray.length; i++) {
    var card = document.createElement('img');
    card.setAttribute('src', 'images/blank.png');
    card.setAttribute('data-id', i);
    card.addEventListener('click', flipCard);
    gridDisplay.appendChild(card);
  }
}

function checkMatch() {
  var cards = document.querySelectorAll('#grid img');
  var optionOne = cardsChosenIds[0];
  var optionTwo = cardsChosenIds[1];

  if (optionOne == optionTwo) {
    cards[optionOne].setAttribute('src', 'images/blank.png');
    cards[optionTwo].setAttribute('src', 'images/blank.png');
    alert('You click the same card!');
  }

  if (cardChosen[0] === cardChosen[1]) {
    alert('You found a match');
    cards[optionOne].setAttribute('src', 'images/white.png');
    cards[optionTwo].setAttribute('src', 'images/white.png');
    cards[optionOne].removeEventListener('click', flipCard);
    cards[optionTwo].removeEventListener('click', flipCard);
    cardsWon.push(cardChosen);
  } else {
    cards[optionOne].setAttribute('src', 'images/blank.png');
    cards[optionTwo].setAttribute('src', 'images/blank.png'); // alert('Sorry try again');
  }

  resultM.textContent = cardsWon.length;
  cardChosen = [];
  cardsChosenIds = [];

  if (cardsWon.length === cardArray.length / 2) {
    resultM.innerHTML = 'Congratulations! You found them all!';
  }
}

function flipCard() {
  var cardId = this.getAttribute('data-id');
  cardChosen.push(cardArray[cardId].name);
  cardsChosenIds.push(cardId);
  this.setAttribute('src', cardArray[cardId].img);

  if (cardChosen.length === 2) {
    setTimeout(checkMatch, 1000);
  }
}

createBoard(); //Whack-a-mole !!!

var squares = document.querySelectorAll('.square');
var mole = document.querySelector('.mole');
var timeLeft = document.querySelector('#time-left');
var score = document.querySelector('#score');
var resultW = 0;
var hitPosition;
var currentTime = 60;
var timerId = null;

function randomSquare() {
  squares.forEach(function (square) {
    square.classList.remove('mole');
  });
  var randomSquare = squares[Math.floor(Math.random() * 9)];
  randomSquare.classList.add('mole'); // console.log(randomPosition);

  hitPosition = randomSquare.id;
}

squares.forEach(function (square) {
  square.addEventListener('mousedown', function () {
    if (square.id === hitPosition) {
      resultW++;
      score.textContent = resultW;
      hitPosition = null;
    }
  });
});

function moveMole() {
  timerId = setInterval(randomSquare, 1500);
} // randomSquare();


moveMole();

function countDown() {
  currentTime--;
  timeLeft.textContent = currentTime;

  if (currentTime === 0) {
    clearInterval(timerId);
    clearInterval(countDownTimeId);
    alert('game is over! Your score is' + resultW);
  }
}

var countDownTimeId = setInterval(countDown, 1000);
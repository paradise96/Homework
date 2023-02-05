"use strict";

//Whack-a-mole !!!
var squares = document.querySelectorAll('.square');
var mole = document.querySelector('.mole');
var timeLeft = document.querySelector('#time-left');
var score = document.querySelector('#score');
var startButton = document.getElementById('start-the-game');
var resultW = 0;
var hitPosition;
var currentTime = 60;
var timerId = null;
var countDownTimeId;

function randomSquare() {
  squares.forEach(function (square) {
    square.classList.remove('mole');
  });
  var timing = 2000;

  if (currentTime < 40) {
    timing = 1500;
  }

  if (currentTime < 20) {
    timing = 1000;
  }

  var randomSquare1 = squares[Math.floor(Math.random() * 9)];
  randomSquare1.classList.add('mole');
  hitPosition = randomSquare1.id;
  var timeCount;

  if (currentTime > 0) {
    timeCount = setTimeout(function () {
      randomSquare();
    }, timing);
  } else {
    clearTimeout(timeCount);
    clearInterval(countDownTimeId);
    Toastify({
      text: "Your score is ".concat(resultW),
      duration: 3000,
      destination: "https://github.com/apvarun/toastify-js",
      newWindow: true,
      close: false,
      gravity: "top",
      // `top` or `bottom`
      position: "center",
      // `left`, `center` or `right`
      stopOnFocus: true,
      // Prevents dismissing of toast on hover
      style: {
        background: "rgb(214, 49, 49)",
        width: '400px',
        height: '200px',
        fontSize: '40px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      },
      onClick: function onClick() {} // Callback after click

    }).showToast();
  }
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
  countDownTimeId = setInterval(renderTime, 1000);
  randomSquare();
}

startButton.addEventListener('click', moveMole, {
  "once": true
});

function renderTime() {
  currentTime--;
  timeLeft.textContent = currentTime;
}
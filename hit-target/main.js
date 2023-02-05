//Whack-a-mole !!!
const squares = document.querySelectorAll('.square');
const mole = document.querySelector('.mole');
const timeLeft = document.querySelector('#time-left');
const score = document.querySelector('#score');
const startButton = document.getElementById('start-the-game');
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
     
        Toastify({
            text: `Your score is ${resultW}`,
            duration: 3000,
            destination: "https://github.com/apvarun/toastify-js",
            newWindow: true,
            close: false,
            gravity: "top", // `top` or `bottom`
            position: "center", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
              background: "rgb(214, 49, 49)",
              width: '400px',
              height: '200px',
              fontSize: '40px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            },
            onClick: function(){} // Callback after click
          }).showToast();
          
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
startButton.addEventListener('click',moveMole, {"once": true});
 

function renderTime(){
    currentTime--;
    timeLeft.textContent = currentTime;
}
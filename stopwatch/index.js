//Declaring variables from html
const addMinutes = document.getElementById('minutes');
const addSeconds = document.getElementById('seconds');
const addMilliseconds = document.getElementById('milliseconds');
const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');
const resetButton = document.getElementById('reset');

//declare variables to count
let minutes = 0;
let seconds = 0;
let milliseconds = 0;
let Interval;


//adding events on buttons
startButton.onclick = function(){
    // clearInterval(Interval);
    // Interval = SetInterval(startWatch, 10);
    startWatch();
};

stopButton.onclick = function() {
    console.log('stop');
};

resetButton.onclick = function() {
    console.log('reset');
};

//Function to start our stopwatch
function startWatch(){
    // milliseconds++;
    // addMilliseconds.innerHTML = 0 + milliseconds;
    addMilliseconds.innerHTML = 45;
}
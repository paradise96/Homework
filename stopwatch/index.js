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
    Interval = setInterval(startWatch, 10);
};

stopButton.onclick = function() {
    clearInterval(Interval);
};

resetButton.onclick = function() {
    clearInterval(Interval);
    minutes = 0;
    seconds = 0;
    milliseconds = 0;
    addMinutes.innerHTML = '00';
    addSeconds.innerHTML = '00';
    addMilliseconds.innerHTML = '00';
};
//Function to replace adding zeros inside startWatch 
const addZeroToNumber = (el, num) => el.innerHTML = '0' + num;

//Function to start our stopwatch
function startWatch(){
    milliseconds++;
    addMilliseconds.innerHTML = milliseconds;
    if(milliseconds < 10) {
        addZeroToNumber(addMilliseconds, milliseconds);
        // addMilliseconds.innerHTML = '0' + milliseconds;
    } 
      if(milliseconds >= 99) {
        milliseconds = 0;
        seconds++;
        addSeconds.innerHTML = seconds;
    }
     if(seconds <= 9){
        addZeroToNumber(addSeconds, seconds);
        // addSeconds.innerHTML ='0' + seconds;
    }  
    
    if(seconds >=59) {
        seconds = 0;
        milliseconds= 0;
        minutes++;
        addMinutes.innerHTML = minutes;
    }

    if(minutes <= 9){
        addZeroToNumber(addMinutes, minutes);
        // addMinutes.innerHTML = '0' + minutes;
    }
}
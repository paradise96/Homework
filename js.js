console.log('Hello world'); 
document.addEventListener('scroll', function(){
    // if(window.scrollY >= 600) {
        if(window.scrollY>=document.getElementById('first_screen').offsetHeight) {
        document.getElementById('header').classList.add('fixed');
    } else {
        document.getElementById('header').classList.add('remove');
    }
});
// .first_screen {
//     height: calc(100 vh - 80px)
// }
// .header {
//     height: 80px;
//     .fixed{
//         position: fixed;
//         w100%,
//         left: 0 top: 0
//          height : 80px
//     }
// }
// const recipient = "James";
// const myName = "Dmytro";
// const email = `Hey ${recipient} ! 
// How it is going? Sincerely yours, ${myName}`;


//Math.PI
function myPow() {
    const number = parseInt(prompt('Enter some number'));
    if(!isNaN(number)) {
        const result = number * number;
        alert(`Number ${number} in second degree is ${result}`);
    } else {
        alert('Please, enter integer number');
    }
}

function averageNumber() {
    const number1 = parseInt(prompt('Enter first number, please'));
    const number2 = parseInt(prompt('Enter second number, fast'));
    if(!isNaN(number1) && !isNaN(number2)) {
        const average = (number1 + number2) / 2;
        alert(`The average number between ${number1} and ${number2} equals ${average}`);
    } else {
        alert('Enter integer number! Now!');
    }
}
// a * x + b = 0
// a * x = -b;
//x = -b/a;
function findX() {
    const a = parseInt(prompt('Enter first number, please'));
    const b = parseInt(prompt('Enter second number, fast'));
    const x = -b / a;
    alert(`Here is an anwser ${x}`);
}

//16:07
//24:00
//24-16 = 8 godin;
//minutes = znachinie 60 - 7

function timeLeft(){
    const writeCurrentHours = parseInt(prompt('Enter hours'));
    const writeCurrentMinutes = parseInt(prompt('Enter minutes, please'));
    let hoursDifference = 24 - writeCurrentHours;
    let minutesDifference = 0;
    if(writeCurrentMinutes !==0) {
        hoursDifference = hoursDifference - 1;
        minutesDifference = 60 - writeCurrentMinutes;
    }
    alert(`hours and minutes left till the end of the day is ${addZero(hoursDifference)}:${addZero(minutesDifference)} `);
}
function addZero(n) {
    if (n<10) {
       return "0" + n;
    } else {
        return n;
    }
}
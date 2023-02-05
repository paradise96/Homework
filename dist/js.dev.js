"use strict";

console.log('Hello world');
document.addEventListener('scroll', function () {
  // if(window.scrollY >= 600) {
  if (window.scrollY >= document.getElementById('first_screen').offsetHeight) {
    document.getElementById('header').classList.add('fixed');
  } else {
    document.getElementById('header').classList.add('remove');
  }
}); // .first_screen {
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
  var number = parseInt(prompt('Enter some number'));

  if (!isNaN(number)) {
    var result = number * number;
    alert("Number ".concat(number, " in second degree is ").concat(result));
  } else {
    alert('Please, enter integer number');
  }
}

function averageNumber() {
  var number1 = parseInt(prompt('Enter first number, please'));
  var number2 = parseInt(prompt('Enter second number, fast'));

  if (!isNaN(number1) && !isNaN(number2)) {
    var average = (number1 + number2) / 2;
    alert("The average number between ".concat(number1, " and ").concat(number2, " equals ").concat(average));
  } else {
    alert('Enter integer number! Now!');
  }
} // a * x + b = 0
// a * x = -b;
//x = -b/a;


function findX() {
  var a = parseInt(prompt('Enter first number, please'));
  var b = parseInt(prompt('Enter second number, fast'));
  var x = -b / a;
  alert("Here is an anwser ".concat(x));
} //16:07
//24:00
//24-16 = 8 godin;
//minutes = znachinie 60 - 7


function timeLeft() {
  var writeCurrentHours = parseInt(prompt('Enter hours'));
  var writeCurrentMinutes = parseInt(prompt('Enter minutes, please'));
  var hoursDifference = 24 - writeCurrentHours;
  var minutesDifference = 0;

  if (writeCurrentMinutes !== 0) {
    hoursDifference = hoursDifference - 1;
    minutesDifference = 60 - writeCurrentMinutes;
  }

  alert("hours and minutes left till the end of the day is ".concat(addZero(hoursDifference), ":").concat(addZero(minutesDifference), " "));
}

function addZero(n) {
  if (n < 10) {
    return "0" + n;
  } else {
    return n;
  }
}

var promise = new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log('Prepare data...');
    var backEndData = {
      server: 'aws',
      port: 2000,
      status: 'working'
    };
    resolve(backEndData);
  }, 3000);
});
promise.then(function (data) {
  // console.log('Promise resolved', data);
  var p2 = new Promise(function (resolve, reject) {
    setTimeout(function () {
      data.modified = true;
      resolve(data); // console.log('data received', backEndData);
    }, 3000);
  });
  p2.then(function (clientData) {
    console.log('data received', clientData);
  })["catch"](function (err) {
    return console.log('Error: ', err);
  })["finally"](function () {
    return console.log('Finally');
  });
});
document.readyState('');
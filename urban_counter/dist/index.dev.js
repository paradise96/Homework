"use strict";

// function increment () {
//     console.log('The button was clicked');
// }
// let count = 0;
// function increment() {
//     count +=1;
//     console.log(count); 
// }
var countEl = document.getElementById("counter");
var count = 0;

function increment() {
  count += 1;
  countEl.innerText = count;
} // let countDec = document.getElementById("counter1");
// let countD = 0;
// function decrement () {
//     countD -= 2;
//     countDec.innerText = countD;
// }


var countMult = document.getElementById("counter2");
var countM = 1;

function multiplier() {
  countM *= 7;
  countMult.innerText = countM;
}

var saving = document.getElementById("save-btn");

function save() {
  console.log(count);
} // let welcomeEl = document.getElementById("welcome-el");
// let name = "Dmytro";
// let greeting = "Welcome back, ";
//     welcomeEl.innerText = greeting + name;
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
}
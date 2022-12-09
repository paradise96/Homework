// function increment () {
//     console.log('The button was clicked');
// }
// let count = 0;
// function increment() {
//     count +=1;
//     console.log(count); 
// }
let countEl = document.getElementById("counter");
let count = 0;
function increment () {
    count +=1;
    countEl.textContent = count;
}

// let countDec = document.getElementById("counter1");
// let countD = 0;
// function decrement () {
//     countD -= 2;
//     countDec.innerText = countD;
// }
let countMult = document.getElementById("counter2");
let countM = 1;
function multiplier () {
    countM *= 7;
    countMult.innerText = countM;
}
let saving = document.getElementById("save-btn");
function save () {
    console.log(count);
}
let saveEl = document.getElementById("save-el");
function save() {
    let sumCount = count + " - ";
    saveEl.textContent += sumCount;
    countEl.textContent = 0;
    count = 0;
    console.log(count);
}
// let welcomeEl = document.getElementById("welcome-el");
// let name = "Dmytro";
// let greeting = "Welcome back, ";
//     welcomeEl.innerText = greeting + name;
let errorEl = document.getElementById("error");
function showError () {
    errorEl.textContent = "Something went wrong, please try again";
}
// let word1 = ['50cent', 'Eminem', 'Snoop Dogg', 'DrDre'];
// let adj1 = ['best', 'favourite', 'popular'];
// let descr1 = ['rapper', 'song-creator', 'compositor'];
// let second = ['hip-hop guy', 'millionaire', 'actor'];
// let randomWord = word1[Math.floor(Math.random() * 4)];
// let randomAdj = adj1[Math.floor(Math.random() * 3)];
// let randomDescr = descr1[Math.floor(Math.random() * 3)];
// let randomSec = second[Math.floor(Math.random() * 3)];
// let summary = randomWord + ' is my ' + randomAdj + ' ' + randomDescr + ' and ' + randomSec;
// console.log(summary);
let num1 = 8;
let num2 = 2;
document.getElementById("num1-el").textContent = num1;
document.getElementById("num2-el").textContent = num2;
let sumEl = document.getElementById("sum-el");

function add() {
    let summary = num1 + num2;
    sumEl.textContent = "Sum: " + summary; 
}
function subtract() {
    let summary = num1 - num2;
    sumEl.textContent = "Sum: " + summary; 
}
function multiply() {
    let summary = num1 * num2;
    sumEl.textContent = "Sum: " + summary; 
}
function divide() {
    let summary = num1 / num2;
    sumEl.textContent = "Sum: " + summary; 
}

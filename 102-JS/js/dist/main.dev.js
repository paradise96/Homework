"use strict";

//Minimum tasks 

/* 1.Виконай додавання 0,1 і 0,2 добийся математично правильної відповіді. */
// FIRST OPTION
console.log((0.1 + 0.2).toFixed(1)); //SECOND OPTION I FOUND IN GOOGLE 

function strip(number) {
  return parseFloat(number.toPrecision(12));
}

console.log(strip(0.1 + 0.2));
/** 2.Виконай додавання рядка "1" і цифри 2 (обидві операнди повинні бути в змінних), добийся математично правильної відповіді.
 */

var num1 = '1';
var num2 = 2;
var sum = parseFloat(num1) + num2;
console.log(sum); ////SECOND OPTION I FOUND IN GOOGLE 

var summary = Number(num1) + num2;
console.log(summary); //FIRST MAIN TASK

function amountOfFiles() {
  var gigabyte = 1024;
  var file = 820;
  var chooseAmountOfGigabites = prompt("Enter amount of gigabites of your storage");
  var files = Math.floor(chooseAmountOfGigabites * gigabyte / file);
  alert("You can save ".concat(files, " files to your storage"));
} // SECOND MAIN TASK
// function calcChocolate() {
//     const money = prompt("How much money do You have?");
//     const chocolates = prompt("How many chocolates would You like to buy?");
//     let amountOfChocolates = money / chocolates;
//     let integerAmount = Math.floor(amountOfChocolates);
//     let moneyLeft = (money - (chocolates * amountOfChocolates)).toFixed(2);
//     alert(`You can buy ${integerAmount} chocolates and ${moneyLeft} dollars left`);
//  }


function calcChocolate() {
  var money = prompt("How much money do You have?");
  var chocolates = prompt("How many chocolates would You like to buy?");
  var amountOfChocolates = Math.trunc(money / chocolates);
  var moneyLeft = (money - chocolates * amountOfChocolates).toFixed(2);
  alert("You can buy ".concat(amountOfChocolates, " chocolates and ").concat(moneyLeft, " dollars left"));
} //THIRD TASK


function reverseNum() {
  var askNumber = prompt("Please, enter three numbers");

  if (askNumber < 100 || askNumber > 999) {
    alert("You MUST enter ONLY three numbers");
  } else if (!isNaN(askNumber)) {
    var firstNum = Math.trunc(askNumber / 100);
    var secondNum = Math.trunc(askNumber % 100 / 10);
    var thirdNum = askNumber % 10;
    alert("Reverse number is ".concat(thirdNum).concat(secondNum).concat(firstNum));
  } else {
    alert("Please, enter integer numbers");
  }
} //FOURTH TASK


function countPercentage() {
  var depositSum = prompt("How much money would you like to add tp deposit?");
  var months = 2;
  var depositPercent = 5;
  var fullPercent = 100;
  var dayInMonth = months * 31;
  var wholeYear = 365;
  var yourProfit = (depositSum * depositPercent * dayInMonth / wholeYear / fullPercent).toFixed(3);
  alert("Your profit is ".concat(yourProfit));
}
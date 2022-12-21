"use strict";

// perimeter kvadrata 4 * a;
//FIRST TASK
function greetings() {
  var userName = prompt("Please, enter your name");

  if (userName === null) {
    alert("Please, we kindly ask You to enter your name");
  } else if (userName === "") {
    alert("Your name should consist some letters:)");
  } else {
    alert("Hello, ".concat(userName, "!"));
  }
} //SECOND TASK


function showUserAge() {
  var currentYear = 2022;
  var askAge = parseInt(prompt('What is your year of birth?'));
  var currentAge = currentYear - askAge;

  if (currentAge < 0) {
    alert('I guess you are not even born now:)');
  } else if (currentAge > 120) {
    alert('You are the oldest human alive');
  } else if (!isNaN(askAge)) {
    alert("Your current age is ".concat(currentAge));
  } else {
    alert('Please, we ask you to enter integer number');
  }
} //THIRD TASK


function countParameter() {
  var askNumber = parseInt(prompt('Введіть, будь ласка, довжину сторони квадрату'));

  if (!isNaN(askNumber)) {
    var parameter = askNumber * 4;
    alert("Parameter of the square equals ".concat(parameter));
  } else {
    alert('Please, we ask you to enter integer number');
  }
} //FOURTH TASK


function circle() {
  var askRadius = parseInt(prompt('Please, enter a radius of a circle'));
  var PI = 3.14;
  var circleSqr = (PI * (askRadius * askRadius)).toFixed(2);

  if (!isNaN(circleSqr)) {
    alert("The area of circle is ".concat(circleSqr));
  } else {
    alert('Please, we ask you to enter integer number');
  }
} //FIFTH TASK


function countSpeed() {
  var askDistance = prompt('Please, enter a distance between cities in km');
  var askHours = prompt('How many hours do you need?');

  if (!isNaN(askDistance) && !isNaN(askHours)) {
    var result = (askDistance / askHours).toFixed(2);
    alert("You need to drive ".concat(result, " km/hour to get there in time"));
  } else {
    alert('Please, enter integer number');
  }
} //SIXTH TASK


function converter() {
  var askAmountOfDollars = parseInt(prompt('Введіть, будь ласка, суму доларів'));
  var difference = 1.03;

  if (!isNaN(askAmountOfDollars)) {
    var amountOfEuros = askAmountOfDollars * difference;
    alert("Your amount of ".concat(askAmountOfDollars, " dollars equals today ").concat(amountOfEuros, " Euros"));
  } else {
    alert('Please, we ask you to enter integer number');
  }
}
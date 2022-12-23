"use strict";

//FIRST TASK
function askAge() {
  var userAge = parseInt(prompt("Please, tell us your age"));

  if (isNaN(userAge)) {
    alert("Enter a number");
  } else if (userAge >= 0 && userAge < 12) {
    alert("You are a kid");
  } else if (userAge >= 12 && userAge < 18) {
    alert("You are a teenager!");
  } else if (userAge >= 18 && userAge < 60) {
    alert("You are grow-up:)");
  } else if (userAge >= 60 && userAge < 122) {
    alert("You are very wise");
  } else {
    alert("Congratulation! You live extremely long, Guiness record");
  }
} //SECOND TASK


function showProperSymbol() {
  var askNum = prompt('Please, enter a number from 0 to 9');

  switch (askNum) {
    case "1":
      alert("1 !");
      break;

    case "2":
      alert("2 @");
      break;

    case "3":
      alert("3 #");
      break;

    case "4":
      alert("4 $");
      break;

    case "5":
      alert("5 %");
      break;

    case "6":
      alert("6 ^");
      break;

    case "7":
      alert("7 &");
      break;

    case "8":
      alert("8 *");
      break;

    case "9":
      alert("9 (");
      break;

    case "0":
      alert("0 )");
      break;

    default:
      alert("Please, enter a number between 0 and 9. Other values wont work");
      break;
  }
} //THIRD TASK


function sumWithinRange() {
  var a = parseInt(prompt("Enter first number")); //4

  var b = parseInt(prompt("Enter a second number")); //2

  var sum = 0;

  if (a > b) {
    a = a + b;
    b = a - b;
    a = a - b;
  }

  while (a <= b) {
    sum += a;
    a++;
  }

  alert("The range of this two numbers equals ".concat(sum));
} //FOURTH TASK


function greatestDivisor() {
  var num1 = parseInt(prompt("Mention first number, please"));
  var num2 = parseInt(prompt("Write down second number, please"));

  if (isNaN(num1) && isNaN(num2)) {
    alert("Write down numbers, not letters, please!");
  } else {
    while (num2) {
      var t = num2;
      num2 = num1 % num2;
      num1 = t;
    }

    alert("The greatest divisor equals ".concat(num1));
  }
} //5 Task


function allFactors() {
  var insertNum = parseInt(prompt("Insert a number, please"));

  for (var i = 1; i <= insertNum; i++) {
    if (insertNum % i == 0) {
      alert("Factors of this number: ".concat(i));
    }
  }
} //6 Task паліндром


function reverseNum() {
  var askNum = +prompt("Please, enter 5 integer numbers"); // const askNum = 12321;

  var a = Math.trunc(askNum / 10000); //1 first number

  var b = Math.trunc(askNum % 10000 / 1000); //2 number

  var c = Math.trunc(askNum % 100 / 10); // 4 chislo

  var d = askNum % 10; //5 last number

  if (isNaN(askNum)) {
    alert("Please, enter integer number");
  } else if (askNum < 10000 || askNum >= 99999) {
    alert("You should enter 5 integer numbers");
  } else if (a === d && b === c) {
    alert("This ".concat(askNum, " is a \u043F\u0430\u043B\u0456\u043D\u0434\u0440\u043E\u043C"));
  } else if (a !== d && b !== c) {
    alert("This ".concat(askNum, " is not a \u043F\u0430\u043B\u0456\u043D\u0434\u0440\u043E\u043C"));
  }
} //  7 TASK


function sumWithDiscount() {
  var insertMoney = +prompt("What is your sum of purchase?");
  var discount;
  var sum;

  if (isNaN(insertMoney)) {
    alert("You need to enter numbers!");
  } else if (insertMoney < 200) {
    alert("With this ".concat(insertMoney, " amount of money you won't get any discount"));
  } else if (insertMoney >= 200 && insertMoney < 300) {
    discount = 0.03;
    sum = insertMoney - insertMoney * discount;
    alert("Your purchase equals ".concat(sum, " with 3% discount"));
  } else if (insertMoney >= 300 && insertMoney < 500) {
    discount = 0.05;
    sum = insertMoney - insertMoney * discount;
    alert("Your purchase equals ".concat(sum, " with 5% discount"));
  } else if (insertMoney >= 500) {
    discount = 0.07;
    sum = insertMoney - insertMoney * discount;
    alert("Your purchase equals ".concat(sum, " with 7% discount"));
  }
} // 8 Task


function mixNums() {
  var positive = 0;
  var negative = 0;
  var zero = 0;
  var paired = 0;
  var unpaired = 0;

  for (var i = 0; i < 10; i++) {
    var askNumbers = parseInt(prompt("Enter a number"));

    if (askNumbers > 0) {
      positive += 1;
    } else if (askNumbers < 0) {
      negative += 1;
    } else if (askNumbers === 0) {
      zero += 1;
    }

    if (askNumbers % 2 === 0) {
      paired += 1;
    }

    if (askNumbers % 2 !== 0) {
      unpaired++;
    }
  }

  alert("You got ".concat(positive, " positive numbers, ").concat(negative, " - negative, ").concat(zero, " - zeros, ").concat(paired, " - paired and ").concat(unpaired, " are unpaired"));
} //9 Task Робили разом з другом


function nameDays() {
  // const arr = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
  // while (prompt()!==null) {
  //     for(let i= 0; i < arr.length; i++){
  //         prompt(`Today is ${arr[i]}. Want to see a new day?`);
  //     }
  // }
  var result = prompt("Hello!");
  var i = 0;
  var test;
  var days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

  if (result !== "") {
    return;
  }

  while (test !== null) {
    if (i >= 6) {
      i = 0;
    }

    test = prompt("next day is " + days[i]);
    i++;
    console.log(test);
  }
}
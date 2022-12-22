//Minimum tasks 
/* 1.Виконай додавання 0,1 і 0,2 добийся математично правильної відповіді. */
// FIRST OPTION
console.log((0.1+0.2).toFixed(1));
//SECOND OPTION I FOUND IN GOOGLE 
function strip(number) {
    return (parseFloat(number.toPrecision(12)));
}
console.log(strip(0.1 + 0.2));

/** 2.Виконай додавання рядка "1" і цифри 2 (обидві операнди повинні бути в змінних), добийся математично правильної відповіді.
 */
const num1 = '1';
const num2 = 2;
const sum = parseFloat(num1) + num2;
console.log(sum);
////SECOND OPTION I FOUND IN GOOGLE 
const summary = Number(num1) + num2;
console.log(summary);



//FIRST MAIN TASK
function amountOfFiles() {
    const gigabyte = 1024;
    const file = 820;
    const chooseAmountOfGigabites = prompt("Enter amount of gigabites of your storage");
    let files = Math.floor(chooseAmountOfGigabites * gigabyte / file);
    alert(`You can save ${files} files to your storage`);
}

// SECOND MAIN TASK
// function calcChocolate() {
//     const money = prompt("How much money do You have?");
//     const chocolates = prompt("How many chocolates would You like to buy?");
//     let amountOfChocolates = money / chocolates;
//     let integerAmount = Math.floor(amountOfChocolates);
//     let moneyLeft = (money - (chocolates * amountOfChocolates)).toFixed(2);
//     alert(`You can buy ${integerAmount} chocolates and ${moneyLeft} dollars left`);
//  }
function calcChocolate() {
    const money = prompt("How much money do You have?");
    const chocolates = prompt("How many chocolates would You like to buy?");
    let amountOfChocolates = Math.trunc(money / chocolates);
    let moneyLeft = (money - chocolates * amountOfChocolates).toFixed(2);
    alert(`You can buy ${amountOfChocolates} chocolates and ${moneyLeft} dollars left`);
}
//THIRD TASK
function reverseNum() {
    const askNumber = prompt("Please, enter three numbers");
    if(askNumber < 100 || askNumber > 999){
        alert("You MUST enter ONLY three numbers");
    } else if (!isNaN(askNumber)){
        let firstNum = Math.trunc(askNumber/100);
        let secondNum = Math.trunc((askNumber%100)/10);
        let thirdNum = askNumber%10;
        alert(`Reverse number is ${thirdNum}${secondNum}${firstNum}`);
    } else {
        alert("Please, enter integer numbers");
    }
}

//FOURTH TASK
function countPercentage() {
    const depositSum = prompt("How much money would you like to add tp deposit?");
    let months = 2;
    let depositPercent = 5;
    const fullPercent = 100;
    const dayInMonth = months * 31;
    const wholeYear = 365;
    let yourProfit = ((depositSum * depositPercent * dayInMonth / wholeYear) / fullPercent).toFixed(3);
    alert(`Your profit is ${yourProfit}`);
}
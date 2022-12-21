// perimeter kvadrata 4 * a;
//FIRST TASK
function greetings() {
    const userName = prompt("Please, enter your name");
    if(userName === null) {
        alert("Please, we kindly ask You to enter your name");
    } else if(userName === "") {
        alert("Your name should consist some letters:)");
    } else {
        alert(`Hello, ${userName}!`);
    }
}

//SECOND TASK
function showUserAge() {
    const currentYear = 2022;
    const askAge = parseInt(prompt('What is your year of birth?'));
    const currentAge = currentYear - askAge;
    if(currentAge < 0) {
        alert('I guess you are not even born now:)');
    } else if(currentAge > 120){
        alert('You are the oldest human alive');
    } else if(!isNaN (askAge)) {
        alert(`Your current age is ${currentAge}`);
    } else {
        alert('Please, we ask you to enter integer number');
    }
}

//THIRD TASK
function countParameter() {
    const askNumber = parseInt(prompt('Введіть, будь ласка, довжину сторони квадрату'));
    if(!isNaN(askNumber)) {
        let parameter = askNumber * 4;
        alert(`Parameter of the square equals ${parameter}`);
    } else {
        alert('Please, we ask you to enter integer number');
    }
}

//FOURTH TASK
function circle() {
    const askRadius = parseInt(prompt('Please, enter a radius of a circle'));
    const PI = 3.14;
    let circleSqr = (PI*(askRadius * askRadius)).toFixed(2);
    if(!isNaN(circleSqr)){
        alert(`The area of circle is ${circleSqr}`);
    } else {
        alert('Please, we ask you to enter integer number');
    }
}

//FIFTH TASK
function countSpeed() {
    const askDistance = prompt('Please, enter a distance between cities in km');
    const askHours = prompt('How many hours do you need?');
    if(!isNaN(askDistance) && !isNaN(askHours)) {
        const result = (askDistance / askHours).toFixed(2);
        alert(`You need to drive ${result} km/hour to get there in time`);
    }  else {
        alert('Please, enter integer number');
    }
}
//SIXTH TASK
function converter() {
    const askAmountOfDollars = parseInt(prompt('Введіть, будь ласка, суму доларів'));
    const difference = 1.03;
    if(!isNaN(askAmountOfDollars)) {
        let amountOfEuros = askAmountOfDollars * difference;
        alert(`Your amount of ${askAmountOfDollars} dollars equals today ${amountOfEuros} Euros`);
    } else {
        alert('Please, we ask you to enter integer number');
    }
}
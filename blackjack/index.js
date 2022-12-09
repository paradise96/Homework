let firstCard =  getRandomCard();
let secondCard =  getRandomCard();
let cards = [firstCard, secondCard];
let sumCard = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = false;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.querySelector("#sum-el");
let cardsEl = document.getElementById("cards-el");

console.log(17);
let player = {
    name:"Dima",
    chips: 150,
};
let playerSum = document.getElementById("player-sum");
playerSum.textContent = player.name + ": $" + player.chips;
function getRandomCard() {
   let randomNumber = Math.floor(Math.random() * 13) + 1;
    if(randomNumber === 1) {
        return 11;
    } else if(randomNumber > 10) {
        return 10;
    } else {
        return randomNumber;
    }
}
function startGame() {
    isAlive = true;
    let firstCard =  getRandomCard();
    let secondCard =  getRandomCard();
    cards = [firstCard,secondCard];
    sumCard =  firstCard + secondCard;
    renderGame();
}

function renderGame() {
    cardsEl.textContent = "Cards: ";
    for (let i=0;i<cards.length;i++) {
        cardsEl.textContent += cards[i] + " ";
    }
    sumEl.textContent ="Sum: " + sumCard;
    if (sumCard <=20){
    message = "Do you want to draw a new card?";
    } else if(sumCard === 21) {
        message = "You've got a blackjack";
        hasBlackJack = true;
    } else {
        message = "You're out of game";
        isAlive = false;
    }
    messageEl.textContent = message;
}
function newCard() {
    if (isAlive === true &&hasBlackJack === false){
    let card = getRandomCard();
    sumCard += card;
    cards.push(card);
    renderGame();
    }
}
// let cards1 = [7, 3, 9];
// for (let i=0; i<cards1.length; i++) {
//     console.log(cards1[i]);
// }
// let alphabet = "abcdefghijklmnopqrstuvwxyz";
// let randomString = "";
// let randomNumber = 10;
// for (let i = 0; i< randomNumber; i++) {
//     randomString += alphabet[Math.floor(Math.random()*alphabet.length)];
// }
// console.log(randomString);
// let solve = false;
// let hint = false;
// if (solve === false && hint=== false){
//     showSolution();
// }
// function showSolution (){
//     console.log("Showing the solution...");
// }
// let documentaries = true;
// let startUp = false;
//  if (documentaries || startUp) {
//     recommendMovie();
//  }
//  function recommendMovie() {
//     console.log("here is some stupid movie");
//  }
//  const airbnbCastle = {
//     isAvailable: true,
//     pricing: "200$",
//     rating: 4.9,
//     apartments: ["2 bedrooms", "1 kitchen", "fridge"]
//  };
//  console.log(airbnbCastle.apartments);
//  console.log(airbnbCastle.pricing);
// let humblePerson = {
//     name: "Dmytro",
//     age: 27,
//     country: "UKRAINE",
// };
// function logData() {
//     return humblePerson.name + " is " + humblePerson.age + " and he lives in " + humblePerson.country;
// }
// console.log(logData());
// let age = 4;
// if (age < 6) {
//     console.log("free");
// } else if (6<= age&& age <= 17) {
//     console.log("Child discount");
// } else if (18<= age&& age <= 26) {
//     console.log("Student discount");
// } else if (26 < age&& age <= 66) {
//     console.log("Full price");
// } else {
//     console.log("Senior citizen discount");
// }
// let largeCountries = ["China", "America", "Brazil", "Pakistan", "India"];
// for (let i = 0; i<largeCountries.length; i++){
//     console.log(" -" + largeCountries[i]);
// }
// let largeCountries = ["Tuvalu", "America", "Brazil", "Pakistan", "Monaco"];
// largeCountries.pop();
// largeCountries.push("India");
// largeCountries.shift();
// largeCountries.unshift("China");
// console.log(largeCountries);
// let hands = ["rock", "paper", "scissors"];
// function randomHand () {
//     let randomIndex = Math.floor(Math.random() * hands.length);
//     return hands[randomIndex];
// }
// console.log( randomHand () );
let fruit = ["apple", "orange","apple", "apple", "orange"];
let appleFruit = document.getElementById("apple-shelf");
let orangeFruit = document.getElementById("orange-shelf");
function allocateFruit () {
    for( let i = 0; i<fruit.length; i++) {
        if(fruit[i] === "apple") {
            appleFruit.textContent += fruit[i];
        } else if (fruit[i] === "orange") {
            orangeFruit.textContent += fruit[i];
        }
    }
}

// function cats(howMany) {
//     for (let i = 0; i < howMany; i++) {
//         console.log( "fuck my life");
//     }
// }
// cats(6);
// function cats(howMany, whatToDraw) {
//     for (let i = 1; i < howMany; i++) {
//         console.log( i + " " + whatToDraw);
//     }
// }
// cats(8, "fuck me");
// cats(2, "(.)(.)");
// cats(3, "0=.");
// let double = function (number) {
//     return number * 2;
// };
// double (3);
let words = ["penetration", "dungeon", "celebration", "interruption"];
let randomWord = words[Math.floor(Math.random() * words.length)];
const answerArray = [];
for(let i=0; i < randomWord.length; i++) {
    answerArray[i] = "_";
}
let remainingLetters = randomWord.length;
// console.log(answerArray);
// console.log(remainingLetters);
while (remainingLetters > 0) {
    alert(answerArray.join(" "));
    let guess = prompt("Guess a letter or click Cancel to stop playing");
    if (guess === null) {
        break;
    } else if (guess.length !==1) {
        alert("Please enter a single letter");
    } else {
        for (let j = 0; j < randomWord.length; j++) {
            if(randomWord[j] === guess) {
                answerArray[j] = guess;
                remainingLetters--;
            }
        }
    }
}
alert(answerArray.join(" "));
alert("Good job! The word was " + randomWord);

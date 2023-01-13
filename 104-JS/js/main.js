//TASK 1 Напиши всі можливі варіанти створення функцій.
//Function Declaration
function declaration(a ,b) {
    return a * b;
}
//Function Expression
const expression = function(c, d) {
    return c - d;
};
//Стрелочная функция
const arrow = (k, m) => {
   return k + m;
};

//TASK 2 Створи функцію, яка буде виводити кількість переданих їй аргументів.
function argumentQty() {
    console.log(arguments);
    // return x, y, w, v;
}
argumentQty(1,2,3,4);

//TASK 3 Напиши функцію, яка приймає 2 числа і повертає :
// -1, якщо перше число менше, ніж друге; 
// 1 - якщо перше число більше, ніж друге; 
// 0 - якщо числа рівні.

function compareNumbers(x, y){
    if(x < y){
        return -1;
    } else if(x > y) {
        return 1;
    } else if ( x === y){
        return 0;
    }
}
// console.log(compareNumbers(4, 7));
// console.log(compareNumbers(12, 6));
// console.log(compareNumbers(11, 11));
    let button = document.getElementById('runCode');
    let firstInput = document.getElementById('firstNumber');
    let secondInput = document.getElementById('secondNumber');
    let output1 = document.getElementById('outputOne');
    button.addEventListener('click', function(){
        output1.innerHTML = compareNumbers(firstInput.value, secondInput.value);
    });
//TASK 4 Напиши функцію, яка обчислює факторіал переданого їй числа.
function factorial(x) {
    let rez = 1;
    while(x) {
         rez*=x--;
    }
    return rez;
}
// console.log(factorial(5));
let runCodeFactorial = document.getElementById('runCodeFactorial');
let factorial1 = document.getElementById('factorial');
let outputTwo = document.getElementById('outputTwo');
runCodeFactorial.addEventListener('click', function(){
    outputTwo.innerHTML = factorial(factorial1.value);
});


//TASK 5 Напиши функцію, яка приймає три окремі цифри і перетворює їх в одне число. Наприклад: цифри 1, 4, 9 перетворяться в число 149.
function returnThreeNumbers(k, m, n) {
    return `${k}${m}${n}`;
}

let runCodeThree = document.getElementById('runCodeThree');
let firstN = document.getElementById('firstN');
let secondN = document.getElementById('secondN');
let thirdN = document.getElementById('thirdN');
let outputThree = document.getElementById('outputThree');
runCodeThree.addEventListener('click', function(){
    outputThree.innerHTML = returnThreeNumbers(firstN.value, secondN.value, thirdN.value);
});
// console.log(returnThreeNumbers(1, 5, 6));
// console.log(returnThreeNumbers(7,2,9));

//TASK 6 Напиши функцію, яка приймає довжину і ширину прямокутника і обчислює його площу. Якщо в функцію передали 1 параметр, то вона обчислює площу квадрата.
function findSquare (a, b) {
    let S = a * b;
    let F = a * a;
    return S || F;
}

let runCodeFour = document.getElementById('runCodeFour');
let firstNum = document.getElementById('firstNum');
let secondNum = document.getElementById('secondNum');
let outputFour = document.getElementById('outputFour');
runCodeFour.addEventListener('click', function(){
    outputFour.innerHTML = findSquare(firstNum.value, secondNum.value);
});
// console.log(findSquare(6 , 7));
// console.log(findSquare(3));

//TASK 7 Напиши функцію, яка перевіряє, чи є передане їй число “досконалим числом”. Досконале число - це число, яке дорівнює сумі всіх своїх дільників.
function perfectNumber(x) {
    let counter = 0;
    for (let i = 1; i<=x/2; i++) {
        if (x % i === 0) {
            counter+=i;
        }
    }
    // console.log(counter);
    // console.log(x);
   if(counter === x) {
    return 'This number is perfect';
   } else {
    return 'This number is not perfect';
   }
  }
    // console.log(perfectNumber(28));
    // console.log(perfectNumber(6));
    // console.log(perfectNumber(35));
    let runCodeFifth = document.getElementById('runCodeFifth');
    let firstNumb = document.getElementById('firstNumb');
    let outputFifth = document.getElementById('outputFifth');
    runCodeFifth.addEventListener('click', function(){
        outputFifth.innerHTML = perfectNumber(Number(firstNumb.value));
});


//TASK 8 Напиши функцію, яка приймає мінімальне і максимальне значення для діапазону, і виводить тільки ті числа з діапазону, які є досконалими. Використовуй написану раніше функцію, щоб дізнатися, чи є це число досконалим.
function findPerfectNumberWithinRange(min, max) {
    for(let i = min; i<=max; i++){
        if(perfectNumber(i)){
            console.log(i);
        }
    }
}
// findPerfectNumberWithinRange(1, 500);

// let veggies = ['cucumber', 'tomato', 'onion', 'carrot'];
// let pos = 1, 
// n =2 ;
// let removedVeggies = veggies.splice(pos , n);
// console.log(removedVeggies);
// console.log(veggies);
// let copyVeggies = veggies.slice();
// if(copyVeggies === veggies) {
//     console.log(true);
// } else {
//     console.log(false);
// }

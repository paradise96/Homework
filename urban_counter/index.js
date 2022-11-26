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
    countEl.innerText = count;
}
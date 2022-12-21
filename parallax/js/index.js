// window.addEventListener('scroll', e => {
//     document.body.style.cssText += `--scrollTop: ${this.scrollY}px`;
// });
// const element = document.getElementById("head");
// const newWord = prompt("CHange the header text");
// element.innerHTML = newWord;123
// let newHeadingText = prompt("please insert new header");
// $("#head").text(newHeadingText);
let counter = 1;
let printMessage = function() {
    console.log("You have been staring at me for " + counter + " seconds!");
    counter++;
};
let intervalid = setInterval(printMessage, 1000);
clearInterval(intervalid, 5000);
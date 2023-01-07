"use strict";

var myLeads = [];
var inputEl = document.getElementById("input-el");
var ulEl = document.getElementById("ul-el");
var deleteBtn = document.getElementById("delete-btn");
var tabBtn = document.getElementById("tab-btn");
var leadsfromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));
deleteBtn.addEventListener('dblclick', function (event) {
  localStorage.clear();
  myLeads = [];
  render(myLeads);
});
var tabs = [{
  url: "https://dotdot.com"
}];
tabBtn.addEventListener('click', function () {
  // chrome.tabs.query( { active: true, currentWindow: true }, function(tabs){
  chrome.tabs.query({
    active: true,
    currentWindow: true
  }, function (tabs) {
    myLeads.push(tabs[0].url);
    localStorage.setItem("myLeads", JSON.stringify(myLeads));
    render(myLeads);
  });
});

if (leadsfromLocalStorage) {
  myLeads = leadsfromLocalStorage;
  render(myLeads);
}

function render(leads) {
  var listItems = "";

  for (var i = 0; i < leads.length; i++) {
    listItems += "<li><a target='_blank' href='".concat(leads[i], "'> ").concat(leads[i], " </a></li>"); // const listItem = document.createElement("li");
    // listItem.textContent = myLeads[i];
    // ulEl.append(listItem);
  }

  ulEl.innerHTML = listItems;
}

var clickedBtn = document.getElementById("input-btn");
clickedBtn.addEventListener("click", function () {
  myLeads.push(inputEl.value);
  inputEl.value = "";
  localStorage.setItem("myLeads", JSON.stringify(myLeads));
  console.log(render(myLeads));
});

function generateSentence(desc, arr) {
  var stringa = "The ".concat(arr.length, " ").concat(desc, " are ");
  var lastIndex = arr.length - 1;

  for (var i = 0; i < arr.length; i++) {
    if (i === lastIndex) {
      stringa += arr[i];
    } else {
      stringa += arr[i] + ', ';
    }
  }

  return stringa;
}

console.log(generateSentence('biggest rivers', ['Amazon', 'Dnipro', 'Nil']));
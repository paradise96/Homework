"use strict";

var myLeads = [];
var inputEl = document.getElementById("input-el");
var ulEl = document.getElementById("ul-el");
var deleteBtn = document.getElementById("delete-btn");
var leadsfromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));
deleteBtn.addEventListener('dblclick', function (event) {
  localStorage.clear();
  myLeads = [];
  renderLeads();
});

if (leadsfromLocalStorage) {
  myLeads = leadsfromLocalStorage;
  renderLeads();
}

function renderLeads() {
  var listItems = "";

  for (var i = 0; i < myLeads.length; i++) {
    listItems += "<li><a target='_blank' href='".concat(myLeads[i], "'> ").concat(myLeads[i], " </a></li>"); // const listItem = document.createElement("li");
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
  console.log(renderLeads());
});
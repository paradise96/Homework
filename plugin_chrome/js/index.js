let myLeads = [];
const inputEl = document.getElementById("input-el");
const ulEl = document.getElementById("ul-el");
const deleteBtn = document.getElementById("delete-btn");
const tabBtn = document.getElementById("tab-btn");
const leadsfromLocalStorage =JSON.parse(localStorage.getItem("myLeads"));

deleteBtn.addEventListener('dblclick', (event) => {
  localStorage.clear();
  myLeads = [];
  render(myLeads);
});
const tabs = [{url: "https://dotdot.com"}];
tabBtn.addEventListener('click', function() {
  // chrome.tabs.query( { active: true, currentWindow: true }, function(tabs){
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      myLeads.push(tabs[0].url);
      localStorage.setItem("myLeads", JSON.stringify(myLeads));
      render(myLeads);
    });
 
});
if(leadsfromLocalStorage) {
  myLeads = leadsfromLocalStorage;
  render(myLeads);
}

function render(leads) {
  let listItems = "";
  for(let i = 0; i < leads.length; i++) {
    listItems += `<li><a target='_blank' href='${leads[i]}'> ${leads[i]} </a></li>`;
    // const listItem = document.createElement("li");
    // listItem.textContent = myLeads[i];
    // ulEl.append(listItem);
  }   
  ulEl.innerHTML = listItems;
}
const clickedBtn = document.getElementById("input-btn");
clickedBtn.addEventListener("click", function() {
  myLeads.push(inputEl.value);
  inputEl.value = "";
  localStorage.setItem("myLeads", JSON.stringify(myLeads));

  console.log(render(myLeads));
});
function generateSentence(desc, arr) {
  let stringa =  `The ${arr.length} ${desc} are `;
  const lastIndex = arr.length - 1;
  for (let i = 0; i < arr.length; i++) {
    if(i === lastIndex) {
      stringa += arr[i];
    } else {
      stringa +=  arr[i] + ', ';
    }
    
  }
 return stringa;
}
console.log(generateSentence('biggest rivers', ['Amazon', 'Dnipro', 'Nil']));
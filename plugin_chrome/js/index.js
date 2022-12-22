let myLeads = [];
const inputEl = document.getElementById("input-el");
const ulEl = document.getElementById("ul-el");
const deleteBtn = document.getElementById("delete-btn");
const leadsfromLocalStorage =JSON.parse(localStorage.getItem("myLeads"));

deleteBtn.addEventListener('dblclick', (event) => {
  localStorage.clear();
  myLeads = [];
  renderLeads();
});

if(leadsfromLocalStorage) {
  myLeads = leadsfromLocalStorage;
  renderLeads();
}

function renderLeads() {
  let listItems = "";
  for(let i = 0; i < myLeads.length; i++) {
    listItems += `<li><a target='_blank' href='${myLeads[i]}'> ${myLeads[i]} </a></li>`;
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

  console.log(renderLeads());
});


  
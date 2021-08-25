const BASE_URL = "http://localhost:3000/items";

// Select and save the items container element
const itemsContainer = document.querySelector("#items-container");
// console.log(itemsContainer)
// Select and save the items form element
const itemsForm = document.querySelector("#items-form");
// console.log(itemsForm)

// Test your code. What is the return value and why?

// Add an event listener to form calling the event handler, createItem

itemsForm.addEventListener("submit", (e) => createItem(e));

// what is the side effect of this logic?
// automatically invoked
// itemsForm.addEventListener('submit', createItem(e))
// itemsForm.addEventListener('submit', () => createItem(e))

// itemsForm.addEventListener('submit', (e) => {
//   e.preventDefault();
//   createItem();
// } )

function createItem(e) {
  e.preventDefault();
  // console.log(event)
  // console.log(e)
  // This event handler should create a new Items object and persist data

  // grab the input values

  let name = itemsForm.querySelector("#items-input").value;
  let quantity = document.querySelector("#quantity-input").value;

  // console.log(name)
  // console.log(quantity)

  // const newItem = {
  //   name: name,
  //   quantity: quantity,
  //   completed: false
  // }

  // using es6
  const newItem = {
    name,
    quantity,
    completed: false,
  };

  const configObj = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(newItem),
  };

  itemsForm.reset();

  fetch(BASE_URL, configObj)
    .then((response) => response.json())
    .then((item) => renderItem(item))
    .catch((error) => console.error("error: ", error));

  // need to make a request to send new item to server
}

// Review this code, can you identify anything that is missing? Test your theories!

function renderItem(item) {
  const checkBox = document.createElement("input");
  checkBox.setAttribute("type", "checkbox");

  if (item.completed) {
    checkBox.checked = true;
  }

  // Fix this code to pass the item object to the event handler
  checkBox.addEventListener("click", () => updateCompleted(item));

  // Remember that element id's should be unique
  const listItem = document.createElement("li");
  listItem.id = `items-${item.id}`;
  listItem.textContent = `Name: ${item.name} - Quantity: ${item.quantity} - Bought: `;

  const deleteBttn = document.createElement("button");
  deleteBttn.textContent = "X";
  deleteBttn.addEventListener("click", (e) => deleteItem(e, item, listItem));

  listItem.append(checkBox, deleteBttn);
  itemsContainer.appendChild(listItem);
  // Test this method by calling in getItems method to render items to DOM
}

function updateCompleted(item) {
  // This logic will use the ! operator to toggle the status of the property, completed. If it returns false, it will update to true and vice versa.
  let completed = (item.completed = !item.completed);

  // if (item.completed === false){
  //   item.completed = true
  // } else {
  //   item.completed = false
  // }

  // Make a fetch request to update data on server upon checkbox click

  fetch(`${BASE_URL}/${item.id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ completed: completed }),
  });
  // .then(resp => resp.json())
  // .then(data => console.log(data))
}

function getItems() {
  // Need to make a fetch request for all items from server
  fetch(BASE_URL)
    .then((resp) => resp.json())
    .then((items) => items.forEach((item) => renderItem(item)));
  // .then(items => items.forEach(renderItem))
}

getItems();

function deleteItem(e, item, listItem) {
  console.log(listItem);
  listItem.remove();
  // e.target.parentElement.remove()

  fetch(`${BASE_URL}/${item.id}`, {
    method: "DELETE",
  });
}

// items.filter(item => item.name === "strawberries")

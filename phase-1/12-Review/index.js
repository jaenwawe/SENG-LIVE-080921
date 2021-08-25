// Select the form and add an event listener for a 'submit' event
// Each item submitted will have a name, quantity and check mark box that will be updated when selected by a user
// Each individual item can be listed in an `li` tag
const BASE_URL = "http://localhost:3000/items";
const itemsContainer = document.querySelector("#items-container");
const itemsForm = document.querySelector("#items-form");
itemsForm.addEventListener("submit", createItem);

function createItem(e) {
  e.preventDefault();
  const name = e.target.querySelector("#items-input").value;
  const quantity = e.target.querySelector("#quantity-input").value;

  const newItem = {
    name: name,
    quantity: quantity,
    completed: false,
  };

  renderItem(newItem);

  fetch(BASE_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newItem),
  });
}

function renderItem(item) {
  const checkBox = document.createElement("input");
  checkBox.setAttribute("type", "checkbox");
  if (item.completed) {
    checkBox.checked = true;
  }
  checkBox.addEventListener("click", () => updateCompleted(item));

  const listItem = document.createElement("li");
  listItem.id = `item-${item.id}`;
  listItem.textContent = `Name: ${item.name} - Quantity: ${item.quantity} - Bought: `;

  const deleteBttn = document.createElement("button");
  deleteBttn.textContent = "X";

  listItem.append(checkBox, deleteBttn);
  itemsContainer.appendChild(listItem);
}

function updateCompleted(item) {
  let completed = (item.completed = !item.completed);

  fetch(BASE_URL + `/${item.id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ completed: completed }),
  });
}

function getItems() {
  fetch(BASE_URL)
    .then((resp) => resp.json())
    .then((items) => items.forEach(renderItem));
}

getItems();

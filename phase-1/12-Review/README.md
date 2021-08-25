# Review

Deliverables:

- Add feature to allow users to submit a new item
- Add feature that updates an item that was bought
- Add feature to delete an item
- Application should fetch data from server and render to DOM

### First to-do

1. select and store div that items should be appended to, items-container

```
const itemsContainer = document.querySelector("#items-container");
const itemsForm = document.querySelector("#items-form");
```

this should return null. Ask students what they theorize could be causing this return value

```
need to add defer to script in index.html
```

2. Fix renderItem, currently is not appending anything to the DOM. Have students identify element we want to append items to and then ask them to write code out to fix any broken code

```
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
```

3. Make a fetch request to get all items from server and render to DOM

```
function getItems() {
  fetch(BASE_URL)
    .then((resp) => resp.json())
    .then((items) => items.forEach(renderItem));
}
```

### Second to-do

2. Add an event listener to form

```
itemsForm.addEventListener("submit", createItem);
```

3. Grab the values on form submission and create a new object inside event handler createItem() and render item to DOM

```
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
}
```

4. Make a POST request that sends the new item to the server

```
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
```

5. Add an event listener to checkbox and update Item property completed to true if selected and false if not selected. Make sure to make a patch request to update server

```
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
```

### Third to-do

Breakout Room: Have students add delete function to application. Item should be removed from the DOM and server.
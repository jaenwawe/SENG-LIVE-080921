// This current code base is written in mostly pre-ES6 syntax.
// Modernize the code and clean it up by utilizing ES6 Syntax

const pokeContainer = document.getElementById("poke-container");
const pokeForm = document.getElementById("poke-form");
const formDiv = document.getElementById("comments-form");

// const arrowFunction = () => {
//   // logic goes here
// }

//implicit return

// console.log(arrowFunction())
// const arrowFunction = parameter => {
//   let x = 0
//   return x
// }

// for (let i = 0; i < Array.length; i++)

const renderPokemon = (pokemon) => {
  const { id, name, img, likes } = pokemon;

  const pokeCard = document.createElement("div");
  pokeCard.id = `poke-${id}`;
  pokeCard.className = "poke-card";

  const pokeImg = document.createElement("img");
  pokeImg.src = img;
  pokeImg.alt = `${name} image`;

  const pokeName = document.createElement("h3");
  pokeName.textContent = name;

  const pokeLikes = document.createElement("h3");
  pokeLikes.textContent = "Likes: ";

  const likesNum = document.createElement("h5");
  likesNum.className = "like-num";
  likesNum.textContent = likes;

  const likeBttn = document.createElement("button");
  likeBttn.className = "like-bttn";
  likeBttn.textContent = "♥";
  likeBttn.addEventListener("click", () => increaseLike(pokemon, likesNum));

  const deleteBttn = document.createElement("button");
  deleteBttn.className = "delete-bttn";
  deleteBttn.textContent = "Delete";
  deleteBttn.addEventListener("click", () => deletePoke(pokeCard, pokemon));

  pokeCard.append(pokeImg, pokeName, pokeLikes, likesNum, likeBttn, deleteBttn);
  pokeContainer.appendChild(pokeCard);
};

const createPokemon = (event) => {
  event.preventDefault();

  let name = pokeForm.querySelector("#name-input").value;
  let img = pokeForm.querySelector("#img-input").value;

  if (name && img) {
    let pokemon = {
      name, //name: name
      img, // img: img
      likes: 0,
    };

    renderPokemon(pokemon);
    castPokemon(pokemon);
    pokeForm.reset();
  } else {
    alert("Please fill out the form!");
  }
};

const increaseLike = (pokemon, likesElement) => {
  ++pokemon.likes;
  likesElement.textContent = pokemon.likes;

  fetch(`http://localhost:3000/pokemons/${pokemon.id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ likes: pokemon.likes }),
  });
};

const deletePoke = (pokeCard, pokemon) => {
  fetch(`http://localhost:3000/pokemons/${pokemon.id}`, {
    method: "DELETE",
  })
    .then((resp) => resp.json())
    .then(pokeCard.remove());
};

const respToJson = (resp) => resp.json();

const gottaCatchEmAll = () => {
  fetch("http://localhost:3000/pokemons")
    .then(respToJson) // return a promise
    .then((pokemon) => pokemon.forEach(renderPokemon));
};

const castPokemon = (pokemon) => {
  const configObj = {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(pokemon),
  };

  fetch("http://localhost:3000/pokemons", configObj);
};

const createCommentForm = () => {
  const commentForm = document.createElement("form");
  commentForm.id = "comment-form";
  commentForm.addEventListener("submit", createComment);

  const contentInput = document.createElement("input");
  contentInput.type = "text";
  contentInput.id = "content-input";

  const submit = document.createElement("input");
  submit.type = "submit";
  submit.id = "submit";
  submit.value = "Create Comment";

  commentForm.append(contentInput, submit);
  formDiv.appendChild(commentForm);
};

const createComment = (e) => {
  e.preventDefault();

  const comment = { content: e.target.querySelector("#content-input").value };

  fetch("http://localhost:3000/comments", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(comment),
  })
    .then(respToJson)
    .then((data) => console.log(data));
};

const init = () => {
  createCommentForm();
  gottaCatchEmAll();
  pokeForm.addEventListener("submit", createPokemon);
};

init();

// destructuring arrays
// use when you know the length and values of your array

// let students = ["alyx", "billy", "kolt", "julie"]

// long way to access elements and set to variable
// let student1 = students[0]
// let student2 = students[1]
// let student3 = students[2]
// let student4 = students[3]

// Using ES6 destructuring:
// let [student1, , student3, student4] = students

// destructuring objects
// variables MUST match the property names

// let obj = {name: "aysan", school: 'Flatiron School'}

// let {school, firstName} = obj

// spread operator

// main goal of using this is to avoid mutating any original data
// pass by reference: destructive, original will mutated in reference, non primitive

// let newArr = [0,1,2]
// let copyOfArr = newArr
// copyOfArr.push(3)

// console.log(newArr)
// console.log(copyOfArr)

// // points to the same place in memory

// // pass by value => pass in the value

// let x = 1

// non destructive
let students = ["alyx", "billy", "kolt", "julie"];
console.log(students);
// let newStudents = [...students, "joseph"]
let newStudents = ["caner", ...students];
console.log(newStudents);
// creating a new array []
// copying over all the values of students array ...students
// adding a new element , "joseph"

// app that has initialState, update the state accordign to our users interactions with the app

// when our user logs out, we want to reset back to this initialState
const initialState = {
  loggedIn: false,
  pokemon: [],
};
// console.log(initialState)

// making a copy of our initialState to update
let state = { ...initialState };
// console.log(state)

// state.pokemon = ["pikachu", "squirtle"]

// if we have a large object, this makes it easier to update only a few properties
// we can perform logic checks inside of this block if necessary
state = {
  ...state, // copy all properties in state
  pokemon: ["pikachu", "squirtle"],
};

state = {
  ...state, // copy all properties in state
  loading: true,
};

// console.log(state)

let arr = [true, false, { name: "Sowande" }];

// let [t, f, obj] = arr
// console.log(obj)
// let {name} = obj
// console.log(name)

let obj = { name: "Aysan", school: { schoolName: "Flatiron" } };

let { name, schoolName } = obj;
console.log(name);
console.log(schoolName);

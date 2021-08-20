const pokeContainer = document.getElementById("poke-container");
const pokeForm = document.getElementById("poke-form");

function renderPokemon(pokemon) {
  const pokeCard = document.createElement("div");
  pokeCard.id = `poke-${pokemon.id}`;
  pokeCard.className = "poke-card";

  const pokeImg = document.createElement("img");
  pokeImg.src = pokemon.img;
  pokeImg.alt = `${pokemon.name} image`;

  const pokeName = document.createElement("h3");
  pokeName.textContent = pokemon.name;

  const pokeLikes = document.createElement("h3");
  pokeLikes.textContent = "Likes: ";

  const likesNum = document.createElement("h5");
  likesNum.className = "like-num";
  likesNum.textContent = pokemon.likes;

  const likeBttn = document.createElement("button");
  likeBttn.className = "like-bttn";
  likeBttn.textContent = "♥";
  likeBttn.addEventListener("click", () => increaseLike(pokemon, likesNum));

  const deleteBttn = document.createElement("button");
  deleteBttn.className = "delete-bttn";
  deleteBttn.textContent = "Delete";
  deleteBttn.addEventListener("click", () => deletePoke(pokeCard));

  pokeCard.append(pokeImg, pokeName, pokeLikes, likesNum, likeBttn, deleteBttn);
  pokeContainer.appendChild(pokeCard);
}

function createPokemon(event) {
  event.preventDefault();

  let pokeName = pokeForm.querySelector("#name-input").value;
  let pokeImg = pokeForm.querySelector("#img-input").value;

  let pokemon = {
    name: pokeName,
    img: pokeImg,
    likes: 0,
  };

  // optimistic rendering: rendering pokemon to dom before castPokemon(fetch request)
  renderPokemon(pokemon);
  castPokemon(pokemon);
  pokeForm.reset();
}

function increaseLike(pokemon, likesElement) {
  ++pokemon.likes;
  likesElement.textContent = pokemon.likes;
}

function deletePoke(pokeCard) {
  pokeCard.remove();
}

function init() {
  gottaCatchEmAll();
  pokeForm.addEventListener("submit", createPokemon);
}

init();

function gottaCatchEmAll() {
  fetch("http://localhost:3000/pokemons")
    .then((resp) => resp.json())
    .then((pokemon) => pokemon.forEach(renderPokemon));
}

function castPokemon(pokemon) {
  const configObj = {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(pokemon),
  };

  fetch("http://localhost:3000/pokemons", configObj);
  // .then(resp => resp.json())
  // .then(pokemon => renderPokemon(pokemon)
  // ) pessimistic rendering
}

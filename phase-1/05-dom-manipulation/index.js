const pokemons = [
  {
    id: 1,
    name: "bulbasaur",
    img: "https://static.wikia.nocookie.net/kingdom-keymasters-database/images/2/27/001Bulbasaur_XY_anime.png/revision/latest?cb=20160927122032",
    likes: 4,
  },
  {
    id: 2,
    name: "ivysaur",
    img: "https://static.wikia.nocookie.net/kingdom-keymasters-database/images/c/ca/002Ivysaur_XY_anime_2.png/revision/latest?cb=20161017212021",
    likes: 21,
  },
  {
    id: 3,
    name: "venusaur",
    img: "https://images.saymedia-content.com/.image/t_share/MTc2MjYwODQ5NTk2NTcyODYy/pokemon-venusaur-nicknames.png",
    likes: 7,
  },
  {
    id: 4,
    name: "charmander",
    img: "https://pixy.org/download/1207107/",
    likes: 20,
  },
  {
    id: 5,
    name: "charmeleon",
    img: "https://static.wikia.nocookie.net/pokemon-quest-adventures/images/a/a4/005Charmeleon_XY_anime_2.png/revision/latest?cb=20170313041459",
    likes: 11,
  },
];

// select poke form
const pokeForm = document.getElementById('poke-form')
// console.log(pokeForm)

const labels = document.getElementsByClassName('form-label')
// console.log(labels)

const goalsDiv = document.querySelector('#lecture-goals')
// console.log(goalsDiv)

const lis = document.querySelectorAll('li')
// console.log(lis)
// pokemons.forEach((pokemon) => renderPokemon(pokemon))


pokemons.forEach(renderPokemon)

function renderPokemon(pokemon){
   console.log(pokemon)
  // debugger;
  const pokeCard = document.createElement("div")
  pokeCard.id = 'poke-' + pokemon.id
  pokeCard.className = "poke-card"

  // create img element
  // give img its properties
  // add this img to pokeCard

  const pokeImg = document.createElement("img")
  pokeImg.src = pokemon.img
  pokeImg.alt = `${pokemon.name} image`
  
  pokeCard.appendChild(pokeImg)
  
  // take pokeCard and attach to 'poke-container'
  const pokeContainer = document.getElementById('poke-container')
  // document.querySelector('#poke-container')

  pokeContainer.appendChild(pokeCard)
  // pokeContainer.append(pokeCard)
  // pokeContainer.innerHTML += pokeCard
  
}

const h1 = document.querySelector('div#lecture-goals h1')
h1.textContent = "Making things appear on the web"

// innerHTML
// innerText
// textContent

goalsDiv.innerHTML += `<button>Click Me!!</button>`

const header = document.querySelector('#header h1')
header.innerHTML = `<img id="header-img" src="https://external-preview.redd.it/tQged7mKJ3cUpNMq5IMeceZvyKP3cTyHqhNmKEQ0Vv8.png?auto=webp&s=fb5fd61cae0bc9cde2bc2a006b1e2aeb0c935ce9"/>`

document.querySelector('button').remove()

goalsDiv.remove()

// document.getElementById('lecture-goal').remove()
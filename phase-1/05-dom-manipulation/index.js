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
    likeBttn.addEventListener('click', () => increaseLike(pokemon, likesNum))
    
    const deleteBttn = document.createElement("button");
    deleteBttn.className = "delete-bttn";
    deleteBttn.textContent = "Delete";
    deleteBttn.addEventListener('click', () => deletePoke(pokeCard))
  
    pokeCard.append(pokeImg, pokeName, pokeLikes, likesNum, likeBttn, deleteBttn);
    pokeContainer.appendChild(pokeCard);
  }
  
  function deletePoke(pokeCard){
    pokeCard.remove()
  }
  
  function deletePoke(event){
    event.target.parentNode.remove()
  }
  
  function increaseLike(pokemon, likesElement){
      // 1. increase the num of likes by 1 per click
        ++pokemon.likes
        // pokemon.likes += 1
      // 2. update the DOM to reflect that new number
        likesElement.textContent = pokemon.likes
  }
  
  function createPokemon(event){
      // prevent default behavior of a form
      event.preventDefault()
    
      // gather input values
      let pokeName = pokeForm.querySelector('#name-input').value
      let pokeImg = pokeForm.querySelector('#img-input').value
    
      // create new pokemon object
       let pokemon = {
        id: 7,
        name: pokeName,
        img: pokeImg,
        likes: 0,
       }
    
      // create a new card for new pokemon
      renderPokemon(pokemon)
      pokeForm.reset()
  }
  
  function init() {
    pokemons.forEach(renderPokemon);
    pokeForm.addEventListener('submit', createPokemon)
  }
  
  init()
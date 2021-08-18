Common errors and how to debug

#### Syntax errors:

```
function getPokemon() {
  fetch("http://localhost:3000/pokemon")
    .then((resp) => resp.json()
    .then((pokemons) => pokemons.characters.forEach(renderPokemon));
}
```

- Easy to miss brackets and paranthesis
- Ways to aleviate that would be to add extensions that help identify matching brackets
- Make sure that always open and close parenthesis and brackets

#### Selecting elements that are not within scope

```
const pokeCard = document.getElementById('poke-1')
console.log(pokeCard) // returns 'null'
```

How to debug this issue?

1. First, read the error and identify what it could mean
2. Why is this returning 'null'? Identify if it is a scoping or selector issue
3. Considering scoping, test accessisibilty

Test selector in console

```
document.getElementById("poke-1")
```

Move variable declaration after renderPokemon has been invoked

```
init();

const pokeCard = document.getElementById('poke-1')
console.log(pokeCard) // returns 'null'
```

Should we have access to this element now?

Move variable declaration into init() and have students identify that it still is returning null due to async behavior of fetch.

What if we created a function and invoked it after a page load?

```
function withinScope(){
  const pokeCard = document.getElementById("poke-1");
  console.log(pokeCard); // returns 'null'

}
```

#### '.... is not a function'

- This is a common confusion amongst beginners

```
function getPokemon() {
  fetch("http://localhost:3000/pokemon")
    .then((resp) => resp.json)
    .then((pokemons) => pokemons.forEach(renderPokemon));
}
```

1. Confirm that forEach() is an array method via MDN
2. We assume pokemons is an array, but let's confirm it
   We can do so by console.log or debugger

Using debugger in arrow functions

- needs to be wrapped in curly braces because it is an expression

```
function getPokemon() {
  fetch("http://localhost:3000/pokemons")
    .then((resp) => resp.json)
    .then((pokemons) => {debugger});
}
```

test

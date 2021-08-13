# DOM Manipulation

### SWBAT:

- Explain what the DOM is and why we use JavaScript to manipulate the DOM
- Manipulate the DOM by using .querySelector(), .querySelectorAll(), .createElement(), .getElementById(), .getElementsByClassName(), .appendChild(), and .remove() as well as .innerHTML, .innerText, and .textContent, to create, read, update, and delete elements from the DOM
- Create and append new elements to the DOM

```txt
05 min - Warm Up
05 min - Review Warm up
10 min - Review scripts and loading js files
20 min - Segment 1: DOM review + accessing DOM elements
10 min - Break
15 min - Knowledge check exercise
05 min - Questions
05 min - Exit Ticket
---
120 min
```

Discuss how to load any JS file into html to be able to utilize JS code

### Segment 1: DOM review + accessing DOM elements

#### DOM is a tree

DOM stands for Document Object Model that gets created when HTML is being loaded from a server. The browser will take the HTML and convert it to the DOM

It becomes a programming interface of your HTML or XML that is created by the browser
Offers a web page as a tree of objects. We can then use JavaScript with the DOM to build interactive websites.

#### Visit a webpage and review the DOM tree

Pull up google and change some text on the page to show that the DOM controls what we see on the page.

#### Parent/Child node relationship

- The DOM is a tree of nodes and each node has its own properties and methods
- What is a node? Anything we can change in the document: element, Text, HTML attributes
- These nodes also have relationships to one another
- Element relationships can be really useful for traversing the DOM. This means accessing elements from other elements

#### Accessing DOM elements

##### byId

```
document.getElementById()
```

    - accepts id as an argument
    - returns first match

Select the form to demonstrate how to use this selector

```
const pokeForm = document.getElementById("poke-form")
```

##### byClassName

```
document.getElementsByClassName()`
```

    - accepts class as an argument
    - returns an HTMLcollection
    - Looks like an array, is not

```
const label = document.getElementsByClassName("form-label")
```

#### querySelector

```
document.querySelector()
```

    - This selector accepts tag names, class names and id’s
    - returns the first value that matches the provided selector.

```
const goalsDiv = document.querySelector("#lecture-goals")
```

#### querySelectorAll

```
document.querySelectorAll()
```

    - Dynamic: accepts class, id’s and
    - Returns a node list that matches the provided selector
    - Only array method available to nodelist is forEach

```
const listItems = document.querySelectorAll("li")
```

```
Break
```

### Segment 2: creating, updating and deleting DOM elements

#### Create an element using .createElement

First point out array of pokemons and ask students what the best way to perform an action on each element of this array would be

```
pokemons.forEach(pokemon => renderPokemon(pokemon))

function renderPokemon(poke){

}
```

Create a div with a dynamic id that returns 'poke-${poke.id}' and class of "poke-card"

```
function renderPokemon(poke) {
  const pokeCard = document.createElement("div");
  pokeCard.id = `poke-${poke.id}`;
  pokeCard.className = "poke-card";
}
```

Have students walk through how to create an img tag and walk through src attribute

```
function renderPokemon(poke) {
  const pokeCard = document.createElement("div");
  pokeCard.id = `poke-${poke.id}`;
  pokeCard.className = "poke-card";

  const pokeImg = document.createElement("img");
  pokeImg.src = poke.img;
  pokeImg.alt = `${poke.name} image`;
}
```

#### Append element to page using .appendChild()

Demonstrate appending pokeImg to pokeCard

```
pokeCard.appendChild(pokeImg)
```

Have students walk you through selecting the "poke-container" and appending the pokeCard to the div

```
const pokeContainer = document.querySelector("#poke-container")
pokeContainer.appendChild(pokeCard)
```

```
Exercise
```

#### Feel free to show other methods like .insertAdjacentHTML()

#### Make changes to an element using .innerHTML and .innerText

Select the h1 tag and change text using .innerText

```
const h1 = document.querySelector('div#lecture-goals h1')
h1.innerText = "Making things appear on the web"
```

Add a new element to the paragraph using .innerHTML. This is a great time to discuss difference between `=` and `+=`

```
goalsDiv.innerHTML += `<button>Click Me!</button>`
```

Ask students how to select the div with id header and replace with the following

```
const header = document.getElementById('header')
header.innerHTML = `<img id="header-img"
          src="https://external-preview.redd.it/tQged7mKJ3cUpNMq5IMeceZvyKP3cTyHqhNmKEQ0Vv8.png?auto=webp&s=fb5fd61cae0bc9cde2bc2a006b1e2aeb0c935ce9"
/>`
```

#### Explain the dangers of using .innerHTML

#### Remove a node using .remove()

Select h1 tag and remove

```
document.querySelector('button').remove()
```

Ask students to help walk you through removing the entire paragraph

```
goalsDiv.remove()
```

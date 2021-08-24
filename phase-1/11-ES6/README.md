what is ES6

During the second major revision to JavaScript, ES6 was introduced as ECMAScript 2015

The goal was to do more with less code

what parts of our code are ES6

- let, const
- arrow functions
- for/of loop
- spread operator
- destructuring

How to optimize code using ES6

### Arrow functions

```
Change renderPokemon() to an arrow function
```

``` 
refactor parameters without parenthesis
```

Have students refactor the function 'createCommentForm()'

Have students identify any bugs this creates and why 

Go over implicit returns

Show students that you could refactor a .then callback 

```
const respToJson = (resp) => {
    resp.json()
}

.then(respToJson)
```

### Destructuring arrays

create an array and show long way of accessing elements and store in variables

then show destructuring 

```
let students = ["connor", "tina", "sawande", "jae"]

let student1 = students[0]
let student2 = students[1]
let student3 = students[2]
let student4 = students[3]

let [student1, student2, student3, student4] = students
```

use case: not used very often. You would have to know the length of array to properly destructure

### Destructuring Objects

- order does not matter, but naming of variable must match keys
- only matches top level which means will not be able to destructure nested objects

- helps lessen repetetive code

- show students pokemon object in renderPokemon() destructured

```
  const {id, name, img, likes} = pokemon
```

- show students how to destructer in the argument

```
const renderPokemon = ({id, img, name, likes})
```
- in our case, this doesn't work because now we cant refer to the pokemon object entirely 

- show how if key/value are the same variable name, can be combined together as one

in createPokemon() show:

```
  let name = pokeForm.querySelector("#name-input").value;
  let img = pokeForm.querySelector("#img-input").value;

  if (name && img) {
    let pokemon = {
      name,
      img,
      likes: 0,
    };
```

### Spread operator

Arrays:

creates a copy of an existing array to avoid mutating original array

Can anyone remind me again what it means when I say pass by reference vs pass by value?

```
let students = ["connor", "tina", "sawande", "jae"]

let newStudents = [...students, "caner"]

console.log(students)
console.log(newStudents)

console.log(students === newStudents)
```


Objects: 

This will make more sense in upcoming lessons but lets say our app had initial state, and we want to update this state according to users interactions, we never want to mutate original object in case user logs out we can go back to this initial value.

```
const initialState = {
    loggedIn: false,
    pokemon: []
}

let state = {...initialState} 

state = {
    ...state,
    pokemon: ["pikachu", "squirtle"]
}

state = {
    ...state,
    loading: true
}
```
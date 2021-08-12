# JavaScript Objects

### SWBAT:

- Describe prototypal inheritance in JavaScript
- Create and manipulate objects in JavaScript
- Access and modify objects using dot and square property accessors
- Use the `delete` operator to remove a property from an Object
- Use for...in loops to access and manipulate data in arrays and objects

```txt
05 min - Warm Up
05 min - Review Warm up
20 min - Segment 1: Creating and accessing objects
10 min - Break
10 min - Dot notation vs bracket notation use
10 min - Removing object properties
20 min - Segment 2: Looping through objects
15 min - Knowledge check exercise
05 min - Questions
05 min - Exit Ticket
---
120 min
```

### Segment 1: Creating and accessing objects

#### Create an object

Objects can be created with curly braces. They will contain key/value pairs with the key being the objects property

```
const timmy = {name: 'Timmy', breed: 'Siamese', age: 2}
```

Point out Pokedex application and ask students what properties they believe we will have for each pokemon

```
const pikachu = {
    name: 'Pikachu',
    img: 'www.img.com',
    likes: 0
}
```

#### Access and update object properties with dot and bracket

Going back to our cat example, if trying to access the value of the objects properties, can be done by using dot notation or bracket notation

```
timmy.breed
timmy['age']
```

#### When should bracket be used vs. dot

Go over when to use dot notation vs bracket notation in reference to using variables

```
function printName(obj, property) {
  return obj[property]
}

printName(timmy, 'name')
```

if using dot notation it will read property literally

```
function printName(obj, property) {
  return obj.property
}
```

Ask students to observe the nested object and think about how to return 'lighting-rod'

```
const pikachu = {
  name: "Pikachu",
  img: "www.img.com",
  likes: 0,
  abilities: [
    {
        name: "static",
    },
    {
        name: "lightning-rod",
    },
  ],
};

console.log(pikachu['abilities'][1]['name'])
```

Can use bracket and dot notation to add new property values to existing object

```
timmy.fave_snack = 'Cat Nip'

console.log(timmy)
```

#### Remove property using `delete` operator

```
delete timmy.fave_snack
```

#### Pass by value vs Pass by reference
- Make a copy of an object by creating a variable
- Show that mutations to the variable are still reflected in the original object

```
const copyOfPikachu = pikachu 
delete copyOfPikachu.abilities
console.log(copyOfPikachu)
console.log(pikachu)
```

- Make a copy using spread operator
- Show that it’s a unique object so mutations won't affect original

```
const copyOfPikachu = {...pikachu} 
delete copyOfPikachu.abilities
console.log(copyOfPikachu)
console.log(pikachu)
```

Can use Object.assign() as well

```
const copyOfPikachu = Object.assign({}, pikachu) 
delete copyOfPikachu.abilities
console.log(copyOfPikachu)
console.log(pikachu)
```

### Segment 2: looping through objects

#### Iterating through an object using for...in 

Like arrays, we can use a for loop to loop through an objects keys 

```
function objLoops(obj){
    for (const key in obj){
       console.log(obj[key])
    }
}

objLoops(pikachu)
```

#### Demonstrate Object.keys() and Object.values()

Object.keys() returns an array of properties belonging to an object

```
console.log(Object.keys(pikachu))
```

Object.values() will return an array of values in an object

```
console.log(Object.values(pikachu))
```

A good reason to use Object.values would be to create something like html nodes in a clean and consice way 

```
delete pikachu.abilities

const listItems = Object.values(pikachu).map(value => {
        return `<li>${value}</li>`
})

console.log(listItems)
```



#### BONUS if there is time

```
const listItems = Object.values(pikachu).map(value => {
    if (!Array.isArray(value)){
        return `<li>${value}</li>`
    } else {
        return value.map(v => `<li>${Object.values(v)[0]}</li>`)
    }
})

console.log(listItems.flat(1))
```
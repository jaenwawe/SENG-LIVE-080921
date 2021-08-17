# Async JS and Fetch

json-server --watch db.json

### SWBAT:

- Explain the request-response cycle
- Explain the importance of HTTP verbs
- Explain asynchronous functions in JavaScript
- Use fetch() to retrieve data from external API

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

### Segment 1:

#### Review request-response cycle

```
Present slideshow for this section
```

#### Review fetch request and why we use it

What is fetch?

- The Fetch API is a simpler, easy-to-use method of consuming resources asynchronously from a 3rd party API
- an interface that allows us to push and pull data from a server
- it is asynchronous meaning that it will allow any code after it to run while it is being completed
- it is a method that is implicitly ran on the window object

How to use fetch?

```
fetch(URL, [options])
.then()
.then()
```

- url will be the path that is being accessed
- options can be a variety of additional information, such as headers, authentication etc.
- by default fetch makes a `get` request

#### Discuss asynchronous functions

- In simple terms asynchronous functions are code that can start now but finish later

- Show the following example to demonstrate that setTimeOut is async and will allow code after it to run while it completes

```
function testingAsync(){
  console.log('a')
  setTimeout(() => console.log('b'), 2000)
  console.log('c')
}
```

### Segment 2:

#### Send GET request to external API

```
function getPokemons() {
  fetch("http://localhost:3000/pokemons")
    .then((resp) => resp.json())
    .then((pokemons) => {
      pokemons.forEach(renderPoke);
    });
}
```

#### Discuss promises, .then, and .catch

##### Promises

- When a fetch request is completed successfully, it will return a Promise.
- A promise will have three statuses: pending, fulfilled or rejected
- Inside this first promise, there is a response
- We will want to jsonify this response inside of a promise method `.then` like so:

### Segment 3:

#### Complete fetch request and use DOM manipulation to display data to page

## .then()

- since `fetch` is an asynchronous function, we want to ensure that the logic executed on the data received back is only done once the fetch has been resolved.
- that is what `.then()` does
- we will typically use 2 `.then` methods for every fetch request.
- the first `.then` will turn the response into JSON data for us to parse
- the second `.then` will do something with the data

## Putting it all together

                fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=chicken")
                    .then(resp => resp.json())
                    .then(data => {
                        // do something with data and DOM manipulation
                    })

## Handling errors with fetch

- Fetch also has a method `.catch` that we can call on the request
- If an error with the request happens, the reject promise will be returned.
- The catch method is used to handle reject.
- The code within catch() will be executed if an error occurs when calling the API of your choice.

                fetch('https://api.openberydb.org/breweries/search?query=12')
                    .then(res => res.json())
                    .then(data => console.log(data))
                    .catch(err => console.log('err', err))



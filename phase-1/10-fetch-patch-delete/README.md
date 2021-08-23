# Fetch with PATCH and DELETE

json-server --watch db.json

### SWBAT:

- Execute patch requests
- Execute delete requests

#### Warm up

Go over solution for Friday's exercise. This is a good time to review everything with the students

### Segment 1:

Review code, review events and functions that pertain to the like button.

The first deliverable is to send a PATCH request to server in order to make an update to the likes when it is clicked.

- Go over routing, and discuss how the goal is to change one pokemon.
- ID's are really important because we can use it to make any modifications to a single resource.

create a function to updateLikes that will receive the pokemon as an argument

```
function updateLikes(pokemon){
  debugger;
}
```

I placed a debugger for a few reasons:

1. Make sure this get's invoked on a click
2. Check the value of the parameter 'pokemon'
3. Test the endpoint

```
http://localhost:3000/pokemons/${pokemon.id}
```

We can make our fetch request to this endpoint because it is dealing with 1 resource which is the pokemon that was clicked.

```
function updateLikes(pokemon) {
  fetch(`http://localhost:3000/pokemons/${pokemon.id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ likes: pokemon.likes }),
  });
}
```

### Send a DELETE request and update the DOM

```
  fetch(`http://localhost:3000/pokemons/${pokemon.id}`, {
    method: "DELETE",
  });
```

This will cause an error, point the error out and ask students to help debug the issue

Need to add pokemon upon event 

add a debugger and verify that values are as anticipated

```
function deletePoke(pokemon, pokeCard) {
  debugger;
  fetch(`http://localhost:3000/pokemons/${pokemon.id}`, {
    method: "DELETE",
  });

  pokeCard.remove();
}
```
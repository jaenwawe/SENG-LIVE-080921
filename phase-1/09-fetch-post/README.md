# Fetch with POST

json-server --watch db.json

### SWBAT:

- Execute post requests
- Explain the difference between optimistic and pessimistic rendering
- Explain the difference between each HTTP method

#### Warm up

Ask students to write down the four most popularly used HTTP Verbs and the actions associated with them. 

To review fetch again, have students walk through how to perform a get request to grab all pokemon.

- here we can ask students what a promise is 
- why do we call .then after the fetch
- what about the second .then 
- how to inspect data 

### Segment 1:

```
fetch(BASE_URL, configObj)

const configObj = {
    method: "POST",
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(pokemon)
}
```

Break down the configObj:

- By default, fetch makes a get request, so we override that method, but specifying a POST method for the request being made
- headers is a description of what type of content the server should be expecting 


what needs to happen after a promise is returned as a result of fetch?

need to jsonify the response

```
const configObj = {
    method: "POST",
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(pokemon)
}

fetch(BASE_URL, configObj)
.then(resp => resp.json())
```
# JS Events

### SWBAT:

- Explain the difference between a static vs dynamic web application
- Describe event delegation and propogation
- Use a form to add elements to the DOM
- Use submit event handlers
- Use click event handlers 

### Deliverables

- Add an event listener to the like button to increment likes
- Add event listener to remove pokemon card on delete button click
- Submit form and render input on DOM 

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

### Warm up 

Demonstrate Facebook, click on 'Whats on your mind' Enter input and click post.

Ask students to reflect on what events are being utilized to achieve rendering a new post.  

### Segment 1:

Review code before jumping in to help student identify what was completed together on Friday and what will be used for today's objectives.

#### Review events

Go over different types of events and provide the MDN source for event types.

Identify the events that will be used in today's deliverables: click and submit

Discuss 3 components of events:

```
1. Event listener: gets attached to the node meant to make something happen. 
We can add event listeners in 2 ways. 
Inline and with .addEventListener(). 
Inline limits how many events we can attach to a single node. 
.addEventListener's first argument is going to be the event type and the second argument is going to be a callback function referred to as event handler. 
2. Event type: The event type tells the node what behavior the event listener should react on, and when it is heard, it will invoke the event handler.
3. Event handler: A callback function that will handle the event. 
```

Demonstrate `DOMContentLoaded()` and tie back into discussion regarding script tags in index.html from previous lecture.

Touch on accessibility if DOM is not loaded before HTML.

```
// this will wait for entire document to load
document.addEventListener('DOMContentLoaded', init)

// this will be container for all JS designated to running once DOM has loaded. Upon a page landing or refresh.
function init() {
  pokemons.forEach(renderPokemon);
}

Practice testing event listeners with a console.log or placing debuggers in code.
```

#### Practice click event to invoke some change to the DOM

Identify the problem and ask students to walk through how to increment likes on a click.

"Today's goal will be to increment the number of likes for each character when the button is clicked. So off the bat, we already know what type of event is going to be used" 

What we need to do is attach an event listener and then perform incrementing inside event handler. 

Identify the like button and ask students to consider how they would select the element. Drop in chat and the most popular method will be used.

Nice! But quick question, is there anywhere else in our current code that also refers to the like button. 

Point out the `likeBttn` variable. Console.log it to show that it already refers to the button

Reasons why this is better?

```
1. Do not need to select each separate button individually
2. Can collect all buttons but it can create need for more logic: if the buttons text is the heart, attach event listener etc...
3. Attaches event listener upon element creation. 
4. Inside renderPokemon, we also have access to the object the button belongs to. This is a good opportunity to make students think about how that can be beneficial? 
```

```
  likeBttn.addEventListener('click', () => console.log('likes button clicked!'))
```

```
  Then add a debugger to demonstrate event object that gets created:

  likeBttn.addEventListener('click', () => console.log('likes button clicked!'))

  event.target is the node that reacted to an event
  This can be used to traverse DOM to reach another node
  We're not going to use it today but good to know about.
```

Next, discuss steps to perform likes increase and DOM manipulation:

```
  likeBttn.addEventListener('click', () => {
    debugger;
    // Increase likes by 1
    ++pokemon.likes
    // Change the text to reflect update
    likesNum.textContent = pokemon.likes
  })
```

To refactor this, make sure pokemon and likesNum are passed to the event handler

```
  likeBttn.addEventListener('click', () => increaseLikes(pokemon, likesNum))
```

```
Break Time
```

Segment 2:
Use a form to create and add elements to the page
Segment 3:
Use a form to search for elements on a page

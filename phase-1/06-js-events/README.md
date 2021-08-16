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

```txt
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

```

Practice click event to invoke some change to the DOM
Segment 2:
Use a form to create and add elements to the page
Segment 3:
Use a form to search for elements on a page

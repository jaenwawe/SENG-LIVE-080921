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

##### byClassName

```
document.getElementsByClassName()`
    - accepts class as an argument
    - returns an HTMLcollection
```
querySelector
querySelectorAll


### Segment 2: creating, updating and deleting DOM elements
Create an element using .createElement
Append element to page using .appendChild()
Feel free to show other methods like .insertAdjacentHTML()
Make changes to an element using .innerHTML and .innerText
Explain the dangers of using .innerHTML
Remove a node using .remove()

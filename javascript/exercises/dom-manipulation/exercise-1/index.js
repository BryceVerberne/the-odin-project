/*
Add the following to the container class DOM:
  <div id="container">
  	<div class="content">
      This is the glorious text-content!
    </div>
  </div>
*/
// Get the reference to the parent node & create the new element
const container = document.getElementById("container");
let content = document.createElement("div");
let item;

// Add a class & text to the new element
content.className = "content";
content.textContent = "This is the glorious text-content!";

// Append the element to the container parent node
container.appendChild(content);


/*
Make the following modifications to the container on the DOM:
1. A <p> with red text that says “Hey I’m red!”
2. An <h3> with blue text that says “I’m a blue h3!”
3. A <div> with a black border and pink background color with the following elements inside of it:
  - Another <h1> that says “I’m in a div”
  - A <p> that says “ME TOO!”
Hint for this one: after creating the <div> with createElement, append the <h1> and <p> to it before adding it to the container.
*/

// Problem 1.
// Create new element with a <p> tag
content = document.createElement("p");

// Modify the contents of the new element
content.textContent = "Hey I'm red!";
content.style.color = "red";

// Append the element to the container parent node
container.appendChild(content);


// Problem 2.
// Create new element with <h3> tag
content = document.createElement("h3");

// Modify the contents of the new element
content.textContent = "I'm a blue h3!";
content.style.color = "blue";

// Append the element to the container parent node
container.appendChild(content);


// Problem 3.
// Create the div & h1 element
content = document.createElement("div");
item = document.createElement("h1");

// Add styling to the parent & child nodes
content.setAttribute("style", "background: pink; border: 2px solid black");
item.textContent = "I'm in a div";

// Append our <h1> element to the content <div> node
content.appendChild(item);

// Create a new item with a <p> tag
item = document.createElement("p");
item.textContent = "ME TOO!";

// Append item to content & content to container.
content.appendChild(item);
container.appendChild(content);
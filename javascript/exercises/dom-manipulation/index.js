/*
Add the following to the container class DOM:
  <div id="container">
  	<div class="content">
      This is the glorious text-content!
    </div>
  </div>
*/
// Get the reference to the parent node & create the new element
const container = document.getElementById('container');
let content = document.createElement('div');

// Add a class & text to the new element
content.className = 'content';
content.textContent = 'This is the glorious text-content!';

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

content = document.createElement('p');
content.textContent = "Hey I'm red!";
content.style.color = 'red';
container.appendChild(content);
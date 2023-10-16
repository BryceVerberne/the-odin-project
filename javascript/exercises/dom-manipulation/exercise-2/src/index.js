// Basic DOM Manipulation
const link = document.querySelector("a");

// Change the text inside the link
link.textContent = "Mozilla Developer Network";

// Change the URL the link is pointing to
link.href = "https://developer.mozilla.org";

const sect = document.querySelector("section");


// Creating & Placing New Nodes
// Create a new element containing some text.
const para = document.createElement("p");
para.textContent = "We hope you enjoyed the ride.";

// Append para to sect
sect.appendChild(para);

const text = document.createTextNode(" — the premier source for web development knowledge.");

// Grab a reference to the paragraph the link is inside and append the text node to it.
// Notice how this adds to the current paragraph and doesn't start a newline. 
const linkPara = document.querySelector("p");
linkPara.appendChild(text);


// Moving & Removing Elements
// Move the link to the bottom of the section.
sect.appendChild(linkPara);

// Remove linkPara from the DOM
// sect.removeChild(linkPara);

// You can also remove a node based only on a reference to itself.
// linkPara.remove();

// Note: This method is not supported in older browsers. 
// To perform the same action in older browsers, you would do the following:
// linkPara.parentNode.removeChild(linkPara);


// Manipulating Styles
// Let's change the styles of the para variable
para.style.color = "white";
para.style.backgroundColor = "black";
para.style.padding = "10px";
para.style.width = "250px";
para.style.textAlign = "center";

// Element.setAttribute() takes two arguments: the attribute you want to set on the element and the value you want to set it to.
para.setAttribute("class", "highlight"); // We will set a class name of highlight on our paragraph.


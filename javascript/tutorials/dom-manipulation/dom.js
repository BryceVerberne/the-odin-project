// Examine the document object (DOM)
// console.dir(document);

// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// document.title = 123;  // This changes the title of our HTML from Item Lister to 123

// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);     // By examining the sections that this breaks our HTML into, we can grab a specific section with the following
// console.log(document.all[10]); // This grabs h1#header-title which is indexed to 10. As you add new content to a page, this index changes.

// document.all[10].textContent = 'Hello!'; // This changes the content at index 10, but we generally use query selects to do this.
//                                          // Given that the index changes as new content is added to our HTML, this is bad practice.

// console.log(document.forms[0]); // Get all the forms in your HTML document
// console.log(document.links); // Get all the links in your HTML document

// Note: It looks like we are being given arrays but they are not! We are receiving HTMLCollection, and are different from your standard array


// --- Get Elements by ID ---
// let headerTitle = document.getElementById('main-header');
// headerTitle.style.borderBottom = 'solid 3px #000';

// console.log(document.getElementById('header-title')); // This pulls whatever element that is using this ID and logs it.
//                                                       // We can also assign the value it returns to a variable. 

// headerTitle.innerHTML = '<h3>Hello</h3>'; // This changes the text of an element along with the tags associated with it to whatever specified.


// --- Get Elements by Class Name ---
// let items = document.getElementsByClassName('list-group-item');
// console.log(items);
// console.log(items[0]);
// items[1].textContent = 'Hello 2';
// items[1].style.fontWeight = 'bold';

// for (let i = 0; i < items.length; ++i) {
//     items[i].style.backgroundColor = 'gray';
// }


// --- Get Element by Tage Name ---
// let tagItems = document.getElementsByTagName('li');
// console.log(tagItems);

// for (let i = 0; i < tagItems.length; ++i) {
//     tagItems[i].style.backgroundColor = 'gray';
// }


// --- Query Selector ---
// let header = document.querySelector('#main-header');
// header.style.borderBottom = 'solid 4px black';

// let input = document.querySelector('input');
// input.value = 'Hello World';

// let submit = document.querySelector('input[type="submit"]');
// submit.value = "SEND";

// let item = document.querySelector('.list-group-item');
// item.style.color = 'red';

// let lastItem = document.querySelector('.list-group-item:last-child');
// lastItem.style.color = 'blue';


// --- Query Select All ---
// let titles = document.querySelectorAll('.title');
// console.log(titles);
// titles[0].textContent = 'Hello';

// let odd = document.querySelectorAll('li:nth-child(odd)');
// for (let i = 0; i < odd.length; ++i) {
//     odd[i].style.backgroundColor = 'gray';
// }


// ^^ PART 1 ^^


// --- Part 2 ---
// --- Traversing The DOM ---
// let itemList = document.querySelector('#items');

// itemList.parentNode.style.backgroundColor = 'gray';
// console.log(itemList);
// console.log(itemList.parentNode);
// console.log(itemList.parentNode.parentNode);
// console.log(itemList.parentNode.parentNode.parentNode);


// --- Child Nodes ---
// console.log(itemList.children);
// console.log(itemList.children[1]);


// --- First Child ---
// itemList.firstElementChild.style.backgroundColor = 'gray';


// --- Next Sibling ---
// itemList.firstElementChild.nextElementSibling.textContent = 'Hi!';

// --- Previous Sibling ---
// itemList.children[2].previousElementSibling.style.backgroundColor = 'gray';

// --- Create Element ---
// let newDiv = document.createElement('div');

// Add Class
// newDiv.className = 'hello';

// Add ID
// newDiv.id = 'howdy';

// Setting a title
// newDiv.setAttribute('title', 'Hello div');


// Creating a Text Node
// let newDivText = document.createTextNode('Hello World');

// Add text to div
// newDiv.appendChild(newDivText);

// let container = document.querySelector('header .container');
// let h1 = document.querySelector('header h1');

// container.insertBefore(newDiv, h1);


// ^^ PART 2 ^^


// --- Part 3 ---
// --- Events ---
// function buttonClick(e) {
//     console.log(e.target);
//     console.log(e.target.id);
//     console.log(e.target.className);
//     console.log(e.target.classList)
// }

// let button = document.getElementById('button');
// button.addEventListener('click', buttonClick);

let button = document.getElementById('button');
let box = document.getElementById('box');
// button.addEventListener('click', runEvent);
// button.addEventListener('dblclick', runEvent);
// button.addEventListener('mousedown', runEvent);

// box.addEventListener('mouseenter', runEvent);
// box.addEventListener('mouseleave', runEvent);

// box.addEventListener('mouseover', runEvent);
// box.addEventListener('mouseout', runEvent);

// box.addEventListener('mousemove', runEvent);

let itemInput = document.querySelector(`input[type="text"]`);
let form = document.querySelector(`form`);
let select = document.querySelector('select');

// itemInput.addEventListener(`keydown`, runEvent);
// itemInput.addEventListener(`keyup`, runEvent);
// itemInput.addEventListener(`keypress`, runEvent);

// itemInput.addEventListener(`focus`, runEvent);
// itemInput.addEventListener(`blur`, runEvent);

// itemInput.addEventListener(`cut`, runEvent);
// itemInput.addEventListener(`paste`, runEvent);

// select.addEventListener('change', runEvent);
// select.addEventListener('input', runEvent);

itemInput.addEventListener(`input`, runEvent);

form.addEventListener('submit', runEvent);

function runEvent(e) {
    // e.preventDefault();
    console.log(`EVENT TYPE: ${e.type}`);


    // console.log(e.target.value);
    // document.getElementById('output').innerHTML = `<h3>${e.target.value}</h3>`;
    // document.body.style.backgroundColor = `rgb(${e.offsetX},${e.offsetY},40)`;
}


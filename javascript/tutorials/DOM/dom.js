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


// GETELEMENTBYID //
// let headerTitle = document.getElementById('main-header');
// headerTitle.style.borderBottom = 'solid 3px #000';

// console.log(document.getElementById('header-title')); // This pulls whatever element that is using this ID and logs it.
//                                                       // We can also assign the value it returns to a variable. 

// headerTitle.innerHTML = '<h3>Hello</h3>'; // This changes the text of an element along with the tags associated with it to whatever specified.


// GETELEMENTSBYCLASSNAME //
// let items = document.getElementsByClassName('list-group-item');
// console.log(items);
// console.log(items[0]);
// items[1].textContent = 'Hello 2';
// items[1].style.fontWeight = 'bold';

// for (let i = 0; i < items.length; ++i) {
//     items[i].style.backgroundColor = 'gray';
// }


// GETELEMENTSBYTAGNAME //
// let tagItems = document.getElementsByTagName('li');
// console.log(tagItems);

// for (let i = 0; i < tagItems.length; ++i) {
//     tagItems[i].style.backgroundColor = 'gray';
// }


// QUERYSELECTOR //
let header = document.querySelector('#main-header');
header.style.borderBottom = 'solid 4px black';

let input = document.querySelector('input');
input.value = 'Hello World';

let submit = document.querySelector('input[type="submit"]');
submit.value = "SEND";
// Examine the document object (DOM)
// console.dir(document);

console.log(document.domain);
console.log(document.URL);
console.log(document.title);
// document.title = 123;  This changes the title of our HTML from Item Lister to 123

console.log(document.doctype);
console.log(document.head);
console.log(document.body);
console.log(document.all);  // By examining the sections that this breaks our HTML into, we can grab a specific section with the following
console.log(document.all[10]); // This grabs h1#header-title which is indexed to 10. As you add new content to a page, this index changes.

/*
document.all[10].textContent = 'Hello!'; // This changes the content at index 10, but we generally use query selects to do this.
                                         // Given that the index changes as new content is added to our HTML, this is bad practice.
*/

console.log(document.forms); // Get all the forms in your HTML document
console.log(document.links); // Get all the links in your HTML document

// Note: It looks like we are being given arrays but they are not! We are receiving nodelists, and are different from your standard array


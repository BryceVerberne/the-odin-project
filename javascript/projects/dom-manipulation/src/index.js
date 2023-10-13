// We want to be able to type something into our form and then add it to the items in our list. 
// To do this, we are going to want to reference our form element and the items.
let form = document.getElementById('addForm');
let itemList = document.getElementById('items');

// Form submit event
form.addEventListener('submit', addItem);

// This function reads the submitted input and adds it to our list.
function addItem(e) {
    e.preventDefault(); // Prevent the normal submission of the form so we can read the input
    
    // Get input value
    
}
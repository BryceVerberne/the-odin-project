// We want to be able to type something into our form and then add it to the items in our list. 
// To do this, we are going to want to reference our form element and the items.
let form = document.getElementById('addForm');
let itemList = document.getElementById('items');
let filter = document.getElementById('filter');

// Form submit event
form.addEventListener('submit', addItem);

// Delete Event
itemList.addEventListener('click', removeItem);

// Filter event
filter.addEventListener('keyup', filterItems);


// This function reads the submitted input and adds it to our list.
function addItem(e) {
    e.preventDefault(); // Prevent the normal submission of the form so we can read the input
    
    // Get input value
    let newItem = document.getElementById('item').value;

    // Create a new list item
    let li = document.createElement('li');

    // Add a class to our new list item
    li.className = 'list-group-item';

    // Add text node with input value
    li.appendChild(document.createTextNode(newItem));

    // Create the delete button element
    let deleteBtn = document.createElement('button');

    // Add classes to deleteBtn
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete';

    // Append text node 
    deleteBtn.appendChild(document.createTextNode('X'));

    // Append button to li
    li.appendChild(deleteBtn);

    // Append li to list
    itemList.appendChild(li);
}

// Remove Item
function removeItem(e) {
    if (e.target.classList.contains('delete')) {
        if (confirm('Are You Sure?')) {
            let item = e.target.parentElement;
            itemList.removeChild(item);
        }
    }
}

// Filter Items
function filterItems(e) {
    // Convert to lowercase
    let text = e.target.value.toLowerCase();
    console.log(text);

    // Get list
    let items = itemList.getElementsByTagName('li');

    // Convert HTMLCollection to array
    Array.from(items).forEach(function(item){
        let itemName = item.firstChild.textContent;
        if (itemName.toLowerCase().indexOf(text) !== -1) {
            item.style.display = 'block';
        }
        else {
            item.style.display = 'none';
        }
    });
}
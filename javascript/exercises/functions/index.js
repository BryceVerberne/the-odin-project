/*
    1.)
    Write a function called `add7` that takes one number and returns that 
    number + 7.
*/
function add7(userNumber) {
    return Number(userNumber) + 7;  // We can also use the `+` unary operator
}

alert("Provide me with a number and I'll add 7 to it.")
const userNumber = prompt("Provide a number.");
let result = add7(userNumber);

alert(`${userNumber} + 7 = ${result}`)


/*
    2.)
    Write a function called `multiply` that takes 2 numbers and returns their
    product.
*/
function multiply(numOne, numTwo) {
    return numOne * numTwo;
} 

alert("Provide me with two numbers and I'll return their product.");
const numOne = prompt("Value One");
const numTwo = prompt("Value Two");
result = multiply(numOne, numTwo);

alert(`${numOne} * ${numTwo} = ${result}`);


/*
    3.)
    Write a function called `capitalize` that takes a string and returns that
    string with only the first letter capitalized. Make sure that it can take
    strings that are lowercase, uppercase, or both. 
*/
function capitalize(userString) {
    return userString.charAt(0).toUpperCase() + userString.slice(1,userString.length);
}

alert("Provide me with a string and I'll make it look good for yah!");
let userString = prompt("Provide a string");
result = capitalize(userString);

alert(`Improved String:\n${capitalize(result)}`);


/*
    4.)
    Write a function called `lastLetter` that takes a string and returns the
    very last letter of that string.
*/
function lastLetter(userString) {
    return userString.charAt(userString.length - 1);
}

alert("Provide me with a string and I'll return the last letter.");
userString = prompt("Provide a string.");
result = lastLetter(userString);

alert(`The last letter: ${result}`);
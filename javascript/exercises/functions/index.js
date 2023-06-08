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

alert("Provide me with two numbers and I'll give you their product.");
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


/*
    4.)
    Write a function called `lastLetter` that takes a string and returns the
    very last letter of that string.
*/
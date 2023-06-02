// We are printing "Hello, World!" to console
console.log("Hello, World!");

let message; // We are creating a variable
message = 'Hooga booga!'; // We are storing 'Hello' in `message`. 
                          // Notice that single quotes, and that
                          // we don't have to specify it as type string.
                
alert(message); // This displays our variable
 

// The following are questions answered from the Variables section of our lesson.

// Task 1: Working with variables
//  1. Declare two variables: `admin` and `name`. 
let admin;
let person;
        
//  2. Assign the value "John" to `name` and copy that value from `name` to `admin`.
person = 'John';
admin = person;
        
//  3. Show the value of `admin` using `alert`
alert(admin);
  

// Task 2: Giving the right name
//  1. Create a variable with the name of our planet.
let earth;
        
//  2. Create a name to store the name of a current visitor.
let currentVisitorName;
  

// Task 3: Uppercase const?
const BIRTHDAY = '18.04.1982';  // The value is known upon declaration; therefore, it's uppercase.
const age = BIRTHDAY;           // This is not uppercase since the value of `age` is not
                                // known upon declaration but is calculated in run time.


// Here, we are adding two numbers together and displaying the result in the console
console.log(23 + 97);


// This is a sequence of 6 different numbers being added together
let numSequence = 1 + 2 + 3 + 4 + 5 + 6;

// Write the result to console
console.log(numSequence);


// Print the solution to (4 + 6 + 9) / 77
console.log((4 + 6 + 9) / 77);

let a = 50;
let b = 5 + a;

console.log(b);
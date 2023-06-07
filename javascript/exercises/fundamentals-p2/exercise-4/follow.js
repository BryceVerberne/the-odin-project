/**
- After each step, run the code to make sure your code still works! 

- If your code fails to run, or you see a "ReferenceError" in the console, review your code and make sure you have completed all of the objectives.
  
- Don't forget you can put "console.log" anywhere to see what your values are at any time.
  
  ===== Step 1: =====
  Look at the code below and make a prediction of what the output will be. 
  
  After making your prediction, press 'Run' at the top and look at the output in the console. If you were surprised by anything, go back and look at the code to see what's going on.

  const birthYear = 1948;
  const thisYear = 1965;
  const firstName = "Carlos";
  const lastName = "Stevenson";

  const greeting = "Hello! My name is " + firstName + " " + lastName + " and I am " + (thisYear - birthYear) + " years old.";

  console.log(greeting);
*/

/*

  ===== Step 2: =====	
  ---------------------------------------------------------------
	
  1. Create 4 variables: firstName, lastName, thisYear, and birthYear

  2. Create a 5th variable, greeting, that is constructed from the previous 4
  (it should contain a greeting with the person's full name and their age)

  3. Print greeting with console.log

  4. Press 'Run' to ensure your code works
	
  ---------------------------------------------------------------

  ===== NOTE =====
  In order to make the tests pass you will need to use these exact values. The wording also needs to be an exact match. If the tests fail, check spacing, capitalization, and punctuation:
	
  birth year = 1948
  this year = 1965
  first name = Carlos
  last name = Stevenson

  The greeting should say: "Hello! My name is Carlos Stevenson and I am 17 years old."

*/

//===== Your code goes here =================
const firstName = "Carlos";
const lastName = "Stevenson";
const thisYear = 1965;
const birthYear = 1948;

const age = thisYear - birthYear;
const fullName = firstName + " " + lastName;

let greeting = "Hello! My name is " + fullName + " and I am " + age + " years old.";

console.log(greeting);

// Test Step 2: 
export {
    birthYear,
    thisYear,
    firstName,
    lastName,
    greeting,
  };

export const testGroup = "a";
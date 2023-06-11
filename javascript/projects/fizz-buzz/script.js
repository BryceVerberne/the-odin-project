/*
    What is FizzBuzz? 
    FizzBuzz is a group word game for children to teach them about division.
    Players take turns to count incrementally, replacing any number divisible
    by three with the word "fizz", and any number divisible by five with the
    word "buzz", and any number divisible by both 3 and 5 with the word 
    "fizzbuzz".
*/

// Task: Write a program that outputs the first 100 FizzBuzz numbers.
let userCap = prompt("How many numbers would you like FizzBuzz to count up to?\nEnter a numerical value:");

for (let i = 1; i <= userCap; ++i) {
    if (((i % 3) === 0) && ((i % 5) === 0)) {
        console.log(`${i} FizzBuzz`);
    }
    else if ((i % 3) === 0) {
        console.log(`${i} Fizz`);
    }
    else if ((i % 5) === 0) {
        console.log(`${i} Buzz`);
    }
    else {
        console.log(`${i}`);
    }
}
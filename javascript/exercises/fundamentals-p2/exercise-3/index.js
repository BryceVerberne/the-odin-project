/**
 * Lets do some math!
 * Some rules first:
 *   Enter the operations, replacing the `"?"`, make the computer do the work for you. 
 *   Do not manually enter the answer, for example: "one plus ten" would look like 1+10
 * 
 * a = one plus eight
 * b = 22 times three
 * c = the *remainder* of 5/4
 * d = the variable 'a' minus 17
 * e = the sum of the previous four variables
 */
// ==============
const a = 1 + 8;
const b = 22 * 3;
const c = 5 % 4;
const d = a - 17;
const e = a + b + c + d;
// ==============

// TESTING
if (a === 9) {
  console.log("'a' is correct!")
} else {
  console.log(`'a' is incorrect, got ${a}, expected 9`)
}
console.log("\n");

if (b === 66) {
  console.log("'b' is correct!")
} else {
  console.log(`'b' is incorrect, got ${b}, expected 66`)
}
console.log("\n");

if (c === 1) {
  console.log("'c' is correct!")
} else {
  console.log(`'c' is incorrect, got ${c}, expected 1`)
}
console.log("\n");

if (d === -8) {
  console.log("'d' is correct!")
} else {
  console.log(`'d' is incorrect, got ${d}, expected -8`)
}
console.log("\n");

if (e === 68) {
  console.log("'e' is correct!")
  console.log("\n Congrats! You may move onto the next exercise")
} else {
  console.log(`'e' is incorrect, got ${e}, expected 68`)
}
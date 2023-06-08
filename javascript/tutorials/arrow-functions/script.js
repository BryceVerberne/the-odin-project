// Convert the following functions to arrow functions.
// ----------------------------------------------------------------------
/*
    Function 1.)

    function sum(a, b) {
        return a + b;
    }
*/
// Since all that is in the function is a return, we can omit the curly braces.
let sum = (a, b) => a + b;


/*
    Function 2.)

    function isPositive(number) {
        return number >= 0;
    }
*/
// Since we only have one parameter, we can completely remove the parentheses around the parameter.
let isPositive = number => number >= 0;


/*
    Function 3.)

    function randomNumber() {
       return Math.random;
    }
*/
// When there is no parameter, we simply use an empty pair of parameters.
let randomNumber = () => Math.random;


/*
    Function 4.)

    document.addEventListener('click', function() {
        console.log('Click');
    });
*/
// We can omit the curly braces since there is only one line of code.
document.addEventListener('click', () => console.log('Click'));
// ----------------------------------------------------------------------


// The `this` keyword with arrow functions example
// ----------------------------------------------------------------------
class Person {
    constructor(name) {
        this.name = name;
    }

    printNameArrow() {
        setTimeout(() => {
            console.log('Arrow: ' + this.name)
        }, 100)
    }

    printNameFunction() {
        setTimeout(function() {
            console.log('Function: ' + this.name)
        }, 100)
    }
}

let person = new Person('Bob');
person.printNameArrow();    // This prints 'Bob'
person.printNameFunction(); // This doesn't print 'Bob'
// ----------------------------------------------------------------------


/*
    Notes:
     Function Conversion:
      - When working with arrow functions, the `function` keyword is assumed.

      - Normal functions generally make a variable of the function name; however,
        when working with arrow functions, we don't have the function name. Therefore,
        we have to make our own variable to assign the function to. 

      - You can omit curly braces from functions with just a return or if there is only one
        line of code.

      - If we only have one parameter, we can completely remove the parentheses around it.

      - When there is no parameter, we use an empty pair of parentheses.

      - Although they improve readability, where they come most in handy is with the `this` 
        keyword. 

---------------------------------------------------------------------------------------------------

     `this` Keyword:
      - When you use `this` inside of a normal function, it is re-defined inside of the 
        function. Therefore, when we try to print 'Bob' using `printNameFunction` it prints
        an empty `this.name` variable.

      - On the other hand, when you use `this` inside of an arrow function, it pertains to the
        scope of the object, not the scope of the method inside the object. Therefore, we can
        print the name `Bob` just fine. What I'm trying to say is that `this.name` is not 
        re-defined, so an arrow function can utilize the value the variable was initially assigned 
        in the scope of the object.

      - This may be difficult to understand, but putting it simply, using an arrow function allows
        the `this` keyword to behave the same to many other programming languages, like Java!

      - It is advised to use arrow functions as often as possible. 
*/
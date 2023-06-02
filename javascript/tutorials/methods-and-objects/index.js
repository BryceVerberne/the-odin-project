// This is a very basic object
const student = {
    name: "Bryce Verberne",  // This is a property
    age: 20,
    major: "Computer Science"
};

// We can use properties from objects using the dot or bracket notation
console.log(student.name);
console.log(student["age"]);

const person = {
    name: "Jack",
    eyes: "blue",
    hair: "pink",
    age: 15,

    // Write a function that uses the object properties
    // The `this` keyword refers to the "owner" of the function, which is
    // the owner object (person) in this scenario.
    introduction: function() {
        let identification = this.name + " has " + this.eyes + " eyes, " + this.hair
        + " hair, and is " + this.age + " years old.";

        return identification;
    }
};

// Print the `person.introduction()` function to console
console.log(person.introduction());


// You can create objects from methods
function teacher(name, age) {
    this.name = name;
    this.age = age;
}


/*  
    Notes:
     - In general, it is good practice to declare an object with `const`. This
       means that you can't reassign the object to a new value; however, you 
       can still modify the properties inside. 

     - If you access a object function without the parentheses, it will return
       the function definition. 

     - Avoid String, Number, & Boolean objects. They complicate your code and 
       slow down execution speeds.
*/
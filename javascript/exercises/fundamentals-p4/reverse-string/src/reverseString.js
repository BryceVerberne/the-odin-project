const reverseString = function(string) {
    let newString = '';

    // Traverse string backwards and concatenate each element to a new string
    for (let i = string.length - 1; i >= 0; --i) {
        newString += string[i];
    }

    return newString;
};

console.log(reverseString('hello there')); // returns 'ereht olleh'

// Do not edit below this line
module.exports = reverseString;

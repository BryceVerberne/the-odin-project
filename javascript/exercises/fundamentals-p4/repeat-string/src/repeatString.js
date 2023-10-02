const repeatString = function(string, repetitions) {
    let newString = '';

    // Check to see if the number of repetitions is negative
    if (repetitions < 0) {
        return 'ERROR';
    }
    else { 
        // Concatenate the user's string with a new string n times.
        for (let i = 0; i < repetitions; ++i) {
            newString += string;
        }
    }

    return newString;
};

// Do not edit below this line
module.exports = repeatString;

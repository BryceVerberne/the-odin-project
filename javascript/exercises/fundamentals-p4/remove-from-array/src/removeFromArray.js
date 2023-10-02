const removeFromArray = function(array, element) {
    // Search array for specified element and, if found, remove it
    for (let i = 0; i < array.length; ++i) {
        if (array[i] == element) {
            array.splice(i,1);
            return array;
        }
    }

    return array;
};

// Do not edit below this line
module.exports = removeFromArray;

const removeFromArray = function(array, ...element) {
    // Search array for specified element and, if found, remove it
    for (let i = 0; i < element.length; ++i) {
        for (let j = 0; j < array.length; ++j) {
            if (array[j] === element[i]) {
                array.splice(j,1);
            }
        }
    }

    return array;
};

// Do not edit below this line
module.exports = removeFromArray;

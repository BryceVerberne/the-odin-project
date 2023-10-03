const sumAll = function(lower, upper) {
    if ((lower < 0) || (upper < 0) || (typeof(lower) != 'number') || (typeof(upper) != 'number')) {
        return 'ERROR';
    }
    
    let sum = 0;

    if (lower > upper) {
        for (let i = upper; i <= lower; ++i) {
            sum += i;
        }
    }
    else {
        for (let i = lower; i <= upper; ++i) {
            sum += i;
        }
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;

const leapYears = function(year) {
    if (((year % 4) === 0) && (((year % 100) !== 0) || ((year % 400)) === 0)) {
        return true;
    }
    return false;
};

console.log(leapYears(2000));

// Do not edit below this line
module.exports = leapYears;

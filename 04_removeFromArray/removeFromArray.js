const removeFromArray = function(array, ...args) {
    for (let i = array.length - 1; i >= 0; i--) {
        if (args.includes(array[i])) {
            array.splice(i, 1);
        }
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;

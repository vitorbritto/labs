'use strict';

var sum = function() {
    var sum = 0,
        i   = 0,
        len = arguments.length;

    for (; i < len; i += 1) {
        sum += arguments[i];
    }

    return sum;
};

console.log(sum(1,2,3,4,5,5,6,7,8,9));

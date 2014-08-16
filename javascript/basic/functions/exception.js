'use strict';

var add = function(a,b) {

    var isNotNan = typeof a !== 'number' || typeof b !== 'number';

    if (isNotNan) {
        throw {
            name: 'TypeError',
            message: 'add needs a number'
        };
    }

    return console.log(a + b);

};

add(5,5);

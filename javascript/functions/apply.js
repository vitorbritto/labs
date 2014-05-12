'use strict';

function add(a,b) {
    return a + b;
}

var arr = [6,2],
    sum = add.apply(null, arr);


console.log(sum);

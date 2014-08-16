'use strict';

// Invoke Method
var obj = {
    value: 1,
    increment: function(inc) {
        this.value += typeof inc === 'number' ? inc : 1;
    }
};

obj.increment();        // 1 + 1
console.log(obj.value); // => 2

obj.increment(5);       // 2 + 5 = 7
console.log(obj.value); // => 7


// Invoke Function
var add = function add(a, b) {
    return a + b;
};

console.log(add(5,5));  // 5 + 5


// Other Invoke Function
var calc = {

    add: function(a, b) {
        return console.log(a + b);
    },
    sub: function(a, b) {
        return console.log(a - b);
    },
    mul: function(a, b) {
        return console.log(a * b);
    },
    div: function(a, b) {
        return console.log(a / b);
    }
};


calc.add(5,5);     // 5 + 5  => 10
calc.sub(10,8);    // 10 - 8 => 2
calc.mul(2,4);     // 2 * 4  => 8

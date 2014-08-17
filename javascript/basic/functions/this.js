'use strict';

// Define Object
var obj = {} || obj;

// Create a property
obj.msg = 'The sum is: ';

// Create "add" method
obj.add = function(a, b) {
    return a + b;
};

// Create "retrieve" method
obj.retrieve = function(a, b) {
    return console.log(this.msg + this.add(a, b));
};

obj.retrieve(4,6);

'use strict';

// BASIC
// ------------------------------------------------------

var num = 42;

console.log(num);

num = 100;

var x = 'The number is' + 42;
var y = 'Position is: ' + 10;

console.log(x);
console.log(y);

console.log(num);

var a = '36' - 6;
var b = '50' + 5;

console.log(a);
console.log(b);

var int = parseInt('35.5px', 10);
var float = parseFloat('45.5px', 10);

console.log(int);
console.log(float);

// use undefined to determine whether a variable has a value

var input = 100;

if(input === undefined) {
    console.log('This variable is undefined');
} else {
    console.log('This variable has a value.');
}

console.log(input);


// SCOPE
// ------------------------------------------------------

// Global
if (true) {
    var x = 5;
}
console.log(x);

// Local
function sum(a,b) {
    return a + b;
}

console.log(5,5);


// HOISTING
// ------------------------------------------------------

// will return a value of undefined
var myvar = 'my value';

(function() {
    console.log(myvar); // undefined
    var myvar = 'local value';
})();


// CONSTANTS
// ------------------------------------------------------

const dev = 'Vitor Britto';
console.log(dev);

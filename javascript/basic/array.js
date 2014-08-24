'use strict';

// ------------------------------------------------------
// TABLE OF CONTENTS
// ------------------------------------------------------
// 1 - GENERAL NOTES
// 2 - STEP BY STEP
// 3 - GENERAL GUIDE
// 4 - COMMON PROBLEMS
// ------------------------------------------------------


// ------------------------------------------------------
// GENERAL NOTES
// ------------------------------------------------------


// ------------------------------------------------------
// STEP BY STEP
// ------------------------------------------------------


// ------------------------------------------------------
// GENERAL GUIDE
// ------------------------------------------------------

// Method - Reverse
var fruits = [
    'apple',
    'mangoo',
    'orange',
    'grape'
].reverse();

console.log(fruits);

// Method - Join
var message = function message(name, module) {
    var str = [
        '✖ This task requires ' + name + ' to be installed globally.',
        'Install: <sudo> npm install ' + module + ' -g',
        '✖ Aborting...'
    ].join('\n');

    return str;
};

console.log(message('Bar Baz', 'barbaz'));

// Method - Sort/Alpha
var arrSort = ['foo', 'bar', 'baz'];
console.log(arrSort.sort());

// Method - Sort/Numerical
var sortNums = function(a,b) {
    return a - b;
};

var arrNums = [13, 5, 23, 65, 19];
console.log(arrNums.sort(sortNums));

// Method - Slice
// Use slice to convert the function arguments property into a proper array:

var args = Array.prototype.slice.call(arguments);

// Method - Splice
var tools2 = [
    'harpjs',
    'grunt',
    'angular',
    'nodejs',
    'gulp',
    'npm',
    'backbone',
    'nodejs'
];

// Method - indexOf and lastIndexOf
var del = tools2.indexOf('nodejs');
console.log(tools2.splice(del, 1));

// replace element in array
var rep = tools2.lastIndexOf('nodejs');
console.log(tools2.splice(rep, 1, 'browserify'));


// ------------------------------------------------------
// COMMON PROBLEMS
// ------------------------------------------------------


// CREATING ARRAYS
// ------------------------------------------------------

// Constructor
var arrCons = new Array('foo', 'bar', 'baz');

// Literal
var arrLit = ['foo', 'bar', 'baz'];


// LOOPING THROUGH AN ARRAY
// ------------------------------------------------------

var arr = ['foo', 'bar', 'baz'],
    str = '';
for (var i = 0, len = arr.length; i < len; i++) {
    str += arr[i] + '\n';
}
console.log(str);


// MULTIDIMENSIONAL ARRAY
// ------------------------------------------------------

// Literal
var market = {
    fruits: ['apple', 'grape', 'orange'],
    qtd: [3, 5, 9],
    desc: ['foo', 'bar', 'baz']
};

console.log(market.fruits);
console.log(market.qtd);
console.log(market.desc);

// Constructor
var len  = 3,
    shop = new Array(len);

// Iterate
for (var i = 0, l = shop.length; i < l; i++) {
    shop[i] = new Array(len);
}

// Items
shop[0][0] = 'jeans';
shop[0][1] = 'shirt';
shop[0][2] = 'socks';

// Prices
shop[1][0] = 10;
shop[1][1] = 20;
shop[1][2] = 30;

// Description
shop[2][0] = 'Jeans description';
shop[2][1] = 'Shirt description';
shop[2][2] = 'Socks description';

console.log(shop[0][1]);


// STORE AND ACCESS VALUES
// ------------------------------------------------------

// IN ORDER

// create new array
var a1 = new Array();

// push entries
a1.push('first');
a1.push('second');
a1.push('third');

// shift entries - remove entry at begin
console.log(a1.shift());
console.log(a1.shift());
console.log(a1);

// IN REVERSE ORDER

// create a new array
var a2 = new Array();

// push entries
a2.push('first');
a2.push('second');
a2.push('third');

// pop entries - remove entry at end
console.log(a2.pop());
console.log(a2.pop());
console.log(a2);


// CREATE A SUBSET ARRAY
// ------------------------------------------------------

// create main array
var mainArr = new Array(4);
mainArr[0] = new Array('one', 'two');
mainArr[1] = new Array('three', 'four');
mainArr[2] = new Array('five', 'six');
mainArr[3] = new Array('seven', 'eight');

// create new array using slice
var newArr = mainArr.slice(1,3);

console.log(newArr);


// SEARCHING FOR A VALUE IN ARRAY
// ------------------------------------------------------

var tools = [
    'harpjs',
    'grunt',
    'angular',
    'nodejs',
    'gulp',
    'npm',
    'grunt',
    'backbone',
    'nodejs'
];

console.log(tools.indexOf('grunt'));
console.log(tools.lastIndexOf('grunt'));


// FLATTEN MULTIDIMENSIONAL ARRAY
// ------------------------------------------------------

var a13  = [['one','two'],['three','four'],['five','six'],['seven','eight']],
    a23 = a13[0].concat(a13[1],a13[2],a13[3]);

console.log(a13);
console.log(a23);


// APPLY A FUNCTION FOR EACH ELEMENT IN ARRAY
// ------------------------------------------------------

var test = ['mocha', 'grunt', 'gulp', 'jasmine', 'qunit', 'bower'];

var specThis = function(elm, idx, arr) {
    if (elm === 'mocha' || elm === 'jasmine' || elm === 'qunit') {
        arr[idx] = elm + 'Spec';
    }
};

test.forEach(specThis);
console.log(test);

// CONVERT DECIMAL NUMBERS INTO HEXADECIMAL
// ------------------------------------------------------

var dec2hex = function(elm, idx, arr) {
    return elm.toString(16);
};

var dec = [23,5,255,6,90,16],
    hex = dec.map(dec2hex);

console.log(hex);


// FILTER VALUES FROM ARRAY
// ------------------------------------------------------

var removeValues = function(elm, idx, arr) {
    return (elm !== 'grunt' || elm !== 'gulp');
};

var allBuilds = ['grunt', 'gulp', 'maven', 'ant', 'rake'],
    jsBuilds  = allBuilds.filter(removeValues);

console.log(jsBuilds);


// TEST VALUES IN ARRAY
// ------------------------------------------------------

// Using every method
var hasElement = ['foo', 'bar', 'baz'];

var txt = function(elm, idx, arr) {
    var exp = /^[a-zA-Z]+$/;
    return exp.test(elm);
};

console.log(hasElement.every(txt));

// Using some method
var someElement = ['coffee', 'and', 'code'];

var txt = function(elm, idx, arr) {
    var exp = /^[a-zA-Z]+$/;
    return exp.test(elm);
};

console.log(someElement.some(txt));

// STORE FORM ELEMENT NAMES AND VALUES
// ------------------------------------------------------

var arr  = arr || {},
    elem = document.forms[0].elements[0],
    str  = '';

arr[elem.id] = elem.value;

for (var key in arr) {
    if (arr.hasOwnProperty(key)) {
        str += key + ',' + arr.key + ' ';
    }
}

// CONCATENATING
// ---------------------------

// Solution 01 - Bad
var str1 = 'Hello',
    str2 = 'World';

console.log(str1 + str2);

// Solution 02 - Good
var str = 'Hello',
    str += ' World!';

console.log(str);

// Solution 03 - Better
var str = ''.concat('Hello', 'World', '!');

console.log(str);

// OR

var arrStr = ['Hello', 'World!'].join(' ');

console.log(arrStr);


// FINDING
// ---------------------------

// Using indexOf
var str  = 'Finding a substring in this string.',
    find = 'this';

var check = str.indexOf(find);

if (check !== -1) {
    console.log(find + ' at ' + check);
}

// Using indexOf w/ two params
var str   = 'I am trying to understand the context of this in my application. Am I doing it right?',
    check = str.indexOf('I', 1); // Will ignore the 0 index where "I" was placed and check other occurrences.
if (check !== -1) {
    console.log('Find at ' + check + ' index.');
}

// Using lastIndexOf
var str   = 'I am trying to understand the context of this in my application. Am I doing it right?',
    check = str.lastIndexOf('I');

if (check !== -1) {
    console.log('Find at ' + check + ' index.');
}

// Using lastIndexOf w/ two params
var str   = 'I am trying to understand the context of this in my application. Am I doing it right?',
    check = str.lastIndexOf('I', 17);

if (check !== -1) {
    console.log('Find at ' + check + ' index.');
}


// EXTRACTING
// ---------------------------

// Hard solution to manipulate strings
var list  = 'Recipe for my cake: eggs, milk, chocolate.',
    start = list.indexOf(':'),
    end   = list.lastIndexOf('.'),
    str   = list.substring(start+1, end);

// We pass the substring without any handling
console.log(str);

// We split into an array values
var handleList = str.split(',');
console.log(handleList);

// We replace commas with new lines using .join() method
var joinStr = handleList.join('\n');
console.log(joinStr);

// We remove spaces in list using .replace() method
var finalStr = joinStr.replace(' ', '');
console.log(finalStr);


// CHECKING FOR A STRING
// ---------------------------

// 1 - check if it exists
// 2 - check if is a String
// 3 - check if is not empty

var checkStr = (typeof str !== 'undefined') && (typeof str.valeuOf() === 'string') && (str.length > 0);
if (checkStr) {
    console.log('It\'s defined as a string and has a length.');
}













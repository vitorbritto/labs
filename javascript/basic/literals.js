'use strict';

// ARRAYS
// ------------------------------------------------------

var array1 = ['foo', 'bar', 'baz'];
var array2 = ['foo', , 'baz'];
var array3 = ['foo', 'bar', ];

console.log(array1);
console.log(array2);
console.log(array3);


console.log(array1[0]);
console.log(array2[0]);
console.log(array3[0]);
console.log(array1[1]);
console.log(array2[1]);
console.log(array3[1]);
console.log(array1[2]);
console.log(array2[2]);
console.log(array3[2]);


// OBJECTS
// ------------------------------------------------------

var list = {
    'fruits': ['apple', 'grape', 'banana'],
    'tools': ['pencil', 'compass'],
    'market': {
        'place': 'Av. Foo bar Baz',
        'name': 'FooBazGo'
    }
};

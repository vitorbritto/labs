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

// Types:
// - Block Statement
// - Conditional Statements
// - Loop Statements


// ------------------------------------------------------
// GENERAL GUIDE
// ------------------------------------------------------

// CONDITIONAL STATEMENTS
// ------------------------------------------------------

// IF
if (true) {
    console.log('Keep going');
}

// IF...ELSE
if (true) {
    console.log('Continue!');
} else {
    console.log('Abort!');
}

// SWITCH
var opt = 'opt01';

switch (opt) {
case 'opt01':
    // something
    break;

case 'opt01':
    // something
    break;

case 'opt01':
    // something
    break;
}

// LOOP STATEMENTS
// ------------------------------------------------------

// FOR
var str = '',
    arr = ['apple', 'orange', 'banana'].join(' - ');

for (var i = 0; i < arr.length; i++) {
    str += arr[i];
}

console.log(str);

// DO...WHILE
do {
   i += 1;
   console.log(i);
} while (i < 5);

// WHILE
var n = 0,
    x = 0;

while (n < 3) {
   n++;
   x += n;
    console.log(x);
}


// OBJECT MANIPULATION STATEMENTS
// ------------------------------------------------------

// FOR...IN
var tools = {
    html: ['jade', 'ejs', 'handlebars', 'markdown'],
    css: ['sass', 'stylus', 'less'],
    js: ['angularjs', 'backbone', 'ember']
};

for (var i in tools) {
    if (tools.hasOwnProperty(i)) {
        console.log(i, '' + tools[i]);
    }
}

// FOR...EACH
var str   = '',
    opts  = tools.html.join(' - ');

var tools = {
        html: ['jade', 'ejs', 'handlebars', 'markdown'],
        css: ['sass', 'stylus', 'less'],
        js: ['angularjs', 'backbone', 'ember']
};

for each (var item in opts) { // Only Mozilla
    str += item;
}

console.log(str);


// EXCEPTION HANDLING STATEMENTS
// ------------------------------------------------------

// THROW

// TRY...CATCH












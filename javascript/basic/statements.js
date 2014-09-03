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
throw 'Error';
throw 44;

// TRY..CATCH
function getMonthName (mo) {
    mo=mo-1; // Adjust month number for array index (1=Jan, 12=Dec)
    var months=new Array("Jan","Feb","Mar","Apr","May","Jun","Jul",
          "Aug","Sep","Oct","Nov","Dec");
    if (months[mo] != null) {
       return months[mo]
    } else {
       throw "InvalidMonthNo"          //throw keyword is used here
    }
}

try { // statements to try
    monthName=getMonthName(myMonth) // function could throw exception
}
catch (e) {
    monthName="unknown"
    logMyErrors(e) // pass exception object to error handler
}


// TRY...CATCH...FINALLY
openMyFile();
try {
    writeMyFile(theData); //This may throw a error
}catch(e){
    handleError(e); // If we got a error we handle it
}finally {
    closeMyFile(); // always close the resource
}


// NESTED TRY...CATCH...FINALLY
function fn() {

    try {
        console.log(0);
        throw 'boing';
    } catch(e) {
        console.log(1);
        return true;
        console.log(2);
    } finally {
        console.log(3);
        return false;
        console.log(4);
    }

    console.log(5);
}

fn(); // alerts 0, 1, 3; returns false













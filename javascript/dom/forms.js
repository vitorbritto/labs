'use strict';

// ------------------------------------------------------
// TABLE OF CONTENTS
// ------------------------------------------------------
// 1 - GENERAL NOTES
// 2 - GENERAL GUIDE
// 3 - STEP BY STEP
// 4 - COMMON PROBLEMS
// ------------------------------------------------------


// ------------------------------------------------------
// GENERAL NOTES
// ------------------------------------------------------

// COMMON EVENTS
// button, submit       click, keypress, focus, blur
// checkbox             click, keypress
// radiobutton          click, keypress
// textarea             select, change, focus, blur, click, keypress, mousedown, mouseup, keydown, keyup
// password, text       change, focus, blur, keypress, select
// selection            change, focus, blur
// file                 change, focus, blur




// ------------------------------------------------------
// GENERAL GUIDE
// ------------------------------------------------------

// - Access forms and elements

// ------------------------------------------------------
// STEP BY STEP
// ------------------------------------------------------


// ------------------------------------------------------
// COMMON PROBLEMS
// ------------------------------------------------------


// ACCESSING FORM TEXT INPUT VALUES
// ------------------------------------------------------

var $input1 = document.forms[0].elements[0].value;
console.log($input1);

// OR

var $input2 = document.getElementById('input-name');
console.log($input2);


// DISABLE AND ENABLE FORM ELEMENTS
// ------------------------------------------------------

// Using the same method as above,
// let's disable and enable some form elements.

var $disabled1 = $input1.disabled=true,
    $disabled2 = $input2.disabled=true;

console.log($disabled1);
console.log($disabled2);


// ACCESS INFORMATION IN FORM AFTER AN EVENT
// ------------------------------------------------------

var $text = document.getElementById('input-name');

function textChanged() {
    console.log('changed!');
}

$text.addEventListener('change', textChanged);


// PERFORM ACTION WHEN RADIO BUTTON IS CLICKED
// ------------------------------------------------------

document.addEventListener('load', function(e) {

    var $btns = document.forms[0].elements['group1'];

    for (var i = 0; i < $btns.length; i++) {
        $btns[i].onclick=isClicked;
    }

    function isClicked() {
        if (this.value === 'one') {
            document.forms[0].elements['group1'].disabled=true;
            console.log('clicked!');
        }
    }

});


// VALID PHONE NUMBER
// ------------------------------------------------------

var $phone      = document.forms[0].elements['phone'].value,
    $regex      = /\D+/g,
    $validphone = $phone.replace($regex, '');

// check length
if ($validphone.length < 10) {
    console.log('You must enter a valid number.');
}


// PREVENT MULTIPLE SUBMISSIONS
// ------------------------------------------------------

// Check "forms-prevent-submit.html" file for real example.


// HIDE AND DISPLAY FORM ELEMENTS
// ------------------------------------------------------

// Check "forms-hide-display.html" file for real example.






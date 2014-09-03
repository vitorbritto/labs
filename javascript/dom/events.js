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

// IMHO, events are the heart of JavaScript.
// There are a few functionality which events are not used.
// Basicly, an event handler is an element property that you
// can assign a function.

// There are several events that can be used in JavaScript.
//
// Here is a list of a common events:
// - load           - keypress
// - unload         - keydown
// - click          - keyup
// - dbclick        - scroll
// - mousedown      - submit
// - mouseup        - reset
// - mousemover     - change
// - mouseout       - blur
// - mouseover      - focus
//
// Check the complete list here: http://devdocs.io/dom_events/


// ------------------------------------------------------
// STEP BY STEP
// ------------------------------------------------------

// The old way to perform a event handler is:

window.onload = someFunction;

// It's informally called as "DOM Level 0" and it's also
// a common way to attach events nowadays.
// You can also assign an event handler directly in an element:

// Note: I'm using the 'console' object to demonstrate this. =]
var str = '<body onload=\"someFunction()\">';
console.log(str);

// BUT NEVER EVER DO THAT. IT'S A BAD PRATICE!

// With DOM Level 2, you add the function as an event listener.
// The reneral syntax is:

targetElement.addEventListener(typeOfEvent,listenerFunction, useCapture);

// The 'useCapture' parameter can be used to say how events are handled in a stack of nested elements.
// For more information, read this: https://developer.mozilla.org/en-US/docs/Web/API/EventTarget.addEventListener

// So, let's say you want to handle some function in the event load.
// You can perfom this:

document.addEventListener('load', function(e) {
    console.log('Running...');
});

// As you can see, we attached a function and it will be listened when the "load" event happens.
// But, we can optimize these guy, removing the function block, creating it separately and then
// calling it as the second parameter. Like the following code bellow:

var myFunction = function(e) {
    console.log('Running...');
};

document.addEventListener('load', myFunction);

// Much more readable and concise. =]

// Also, there are newer events that uses new models and can work out the browser.
// You can check more information here: http://www.w3.org/TR/DOM-Level-3-Events/

// ------------------------------------------------------
// GENERAL GUIDE
// ------------------------------------------------------



// ------------------------------------------------------
// COMMON PROBLEMS
// ------------------------------------------------------

// RUN A FUNCTION AFTER PAGE LOAD
// ------------------------------------------------------

var fn = function(e) {
    console.log('Hello world!');
};

// DOM LEVEL 0
window.onload = fn;

// DOM LEVEL 2
document.addEventListener('load', fn);


// CAPTURING MOUSE CLICK EVENT
// ------------------------------------------------------

var isClicked = function(evt) {
    var evt = evt ? evt : window.event,
        x   = 0,
        y   = 0,
        oX  = 0,
        oY  = 0,
        msg = [
            'clicked at:',
            'x: ' + x + '',
            'y: ' + y + ''
        ].join('\n');

    if (evt.pageX) {

        x = evt.pageX;
        y = evt.pageY;

    } else if (evt.clientX) {

        if (document.documentElement.scrollLeft) {

            oX = document.documentElement.scrollLeft;
            oY = document.documentElement.scrollTop;

        } else if (document.body) {

            oX = document.body.scrollLeft;
            oY = document.body.scrollTop;

        }

        x = evt.clientX + oX;
        y = evt.clientY + oY;

    }

    console.log(msg);

};

document.addEventListener('click', isClicked);


// CREATING A 'CROSS BROWSER' ADD EVENT HANDLER
// ------------------------------------------------------

var crossAddEvent = function(target, type, handler) {

    if (target.addEventListener) {
        target.addEventListener(type, handler, false);
    } else if (target.attachEvent) {
        type = 'on' + type;
        target.attachEvent(type, handler);
    } else {
        target['on' + type] = handler;
    }

};

crossAddEvent(document, 'click', myFunction);


// CREATING A 'CROSS BROWSER' REMOVE EVENT HANDLER
// ------------------------------------------------------

var crossRemoveEvent = function(target, type, handler) {

    if (target.removeEventListener) {
        target.removeEventListener(type, handler, false);
    } else if (target.detachEvent) {
        type = 'on' + type;
        target.detachEvent(type, handler);
    } else {
        target['on' + type] = null;
    }

};

crossRemoveEvent(document, 'click', myFunction);


// CANCEL EVENT
// ------------------------------------------------------

var stopPrev = function(evt) {

    if (evt.preventDefault) {
        evt.preventDefault();
    } else {
        evt.returnValue = false;
    }

};

// Usage example:
var validateFormPrev = function(evt) {

    var evt = evt || window.event;
    stopPrev(evt);

};

crossAddEvent(document, 'submit', validateFormPrev);


// STOP EVENT PROPAGATION
// ------------------------------------------------------

var stopProp = function(evt) {

    if (evt.stopPropagation) {
        evt.stopPropagation();
    } else {
        evt.cancelBubble = true;
    }

};

var validateFormProp = function(evt) {

    var evt = evt || window.event;
    stopProp(evt);

};

crossAddEvent(document, 'submit', validateFormProp);


// CAPTURING KEYBOARD ACTIVITY
// ------------------------------------------------------

var inputText = document.getElementById('input');

var keyStore = function(evt) {

    var evt = evt || window.event,
        key = evt.charCode ? evt.charCode : evt.keyCode;

    if (key = '38') {
        // do something
    }

};

crossAddEvent(inputText, 'keypress', keyStore);


// CHECKING MOBILE ORIENTATION
// ------------------------------------------------------

var checkOrientation = function () {

    var ort = window.orientation;

    switch(ort) {
        case 0:
        // portrait orientation
        break; case 90:
        case -90:
        // landscape orientation
        break;
    }

};

crossAddEvent(document, 'onorientationchange', checkOrientation);

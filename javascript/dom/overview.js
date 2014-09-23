'use strict';

// ------------------------------------------------------
// GENERAL NOTES
// ------------------------------------------------------


// NODE TYPES
// ------------------------------------------------------

// DOCUMENT_NODE: (window.document)
// ELEMENT_NODE: (<body>, <a>, <p>, <script>, <style>, <html>, <h1>)
// ATTRIBUTE_NODE: (class="my-class")
// TEXT_NODE: (text characters in an HTML document including carriage returns and whitespace)
// DOCUMENT_FRAGMENT_NODE: (document.createDocumentFragment())
// DOCUMENT_TYPE_NODE: (<!DOCTYPE html>)

console.log(Node.DOCUMENT_NODE);
console.log(Node.ELEMENT_NODE);
console.log(Node.ATTRIBUTE_NODE);
console.log(Node.TEXT_NODE);
console.log(Node.DOCUMENT_FRAGMENT_NODE);
console.log(Node.DOCUMENT_TYPE_NODE);

for (var key in Node) {
    console.log(key,' = '+ Node[key]);
}


// SUBNODES TYPES
// ------------------------------------------------------

// Object < Node < Element < HTMLElement < (e.g., HTML*Element)
// Object < Node < Attr (this is deprecated in DOM4)
// Object < Node < CharacterData < Text
// Object < Node < Document < HTMLDocument
// Object < Node < DocumentFragment

// "<": indicates inherited from

// Node is just a JavaScript constructor function. Logically, therefore,
// Node inherits from Object.prototype just like all objects in JavaScript.

// EXAMPLE OF CONSTRUCTOR:
var ConstructorName = (function() {
    'use strict';
    function ConstructorName(args) {
        // enforces new
        if (!(this instanceof ConstructorName)) {
            return new ConstructorName(args);
        }
        // constructor body
    }
    ConstructorName.prototype.methodName = function(args) {
        // method body
    };
    return ConstructorName;
}());


// PROPERTIES AND METHODS
// ------------------------------------------------------

// All node objects (Element, Attr, Text, and so on) inherit properties and methods
// from a primary Node object. These properties and methods are the baseline values
// and functions for manipulating, inspecting, and traversing the DOM.

// NODE PROPERTIES
// childNodes
// firstChild
// lastChild
// nextSibling
// nodeName
// nodeType
// nodeValue
// parentNode
// previousSibling

// NODE METHODS
// appendChild();
// cloneNode();
// compareDocumentPosition();
// contains();
// hasChildNodes();
// insertBefore();
// isEqualNode();
// removeChild();
// replaceChild();

// DOCUMENT METHODS
// document.createElement();
// document.createTextNode();

// HTML*Element PROPERTIES
// innerHTML
// outerHTML
// textContent
// innerText
// outerText
// firstElementChild
// lastElementChild
// nextElementChild
// previousElementChild
// children

// HTML ELEMENT METHOD
// insertAdjacentHTML();


// NODE TYPE AND NODE NAME
// ------------------------------------------------------

// Node.DOCUMENT_TYPE_NODE === 10
console.log(
    document.doctype.nodeName,
    document.doctype.nodeType
);

// Node.DOCUMENT_NODE === 9
console.log(
    document.nodeName,
    document.nodeType
);

// Node.DOCUMENT_FRAGMENT_NODE === 11
console.log(
    document.createDocumentFragment().nodeName,
    document.createDocumentFragment().nodeType
);

// Node.ELEMENT_NODE === 1
console.log(
    document.querySelector('a').nodeName,
    document.querySelector('a').nodeType
);

// Node.TEXT_NODE === 3
console.log(
    document.querySelector('a').firstChild.nodeName,
    document.querySelector('a').firstChild.nodeType
);


// NODE VALUES
// ------------------------------------------------------

console.log(document.doctype.nodeValue);
console.log(document.nodeValue);
console.log(document.createDocumentFragment().nodeValue);
console.log(document.querySelector('a').nodeValue);

document.body.firstElementChild.nodeValue = 'hi';
console.log(document.querySelector('a').firstChild.nodeValue);


// CREATE ELEMENTS AND TEXT NODES
// ------------------------------------------------------

// METHODS USED:
// createElement()
// createTextNode()

// NOT RECOMMENDED:
// createAttribute() - prefer getAttribute(), setAttribute() and removeAttribute()
// createComment()

// EXAMPLE:
var $elm = document.createElement('div');
console.log($elm, $elm.nodeType);

var $txt = document.createTextNode('Hi');
console.log($txt, $txt.nodeType);


// CREATE/ADD ELEMENTS AND TEXT NODES WITH JS STRINGS
// ------------------------------------------------------

// Your current HTML is:
// <div id="A"></div>
// <span id="B"></span>
// <div id="C"></div>
// <div id="D"></div>
// <div id="E"></div>

// EXAMPLES:
//create a strong element and text node and add it to the DOM
document.getElementById('A').innerHTML = '<strong>Hello there!</strong>';

// create a div element and text node to replace <span id="B"></div> (notice span#B is replaced)
document.getElementById('B').outerHTML = '<div id="B" class="new">Hello World!</div>';

//create a text node and update the div#C with the text node
document.getElementById('C').textContent = 'Vitor Britto';

// NON standard extensions below i.e., innerText and outerText
//create a text node and update the div#D with the text node
document.getElementById('D').innerText = 'Keep it!';

// create a text node and replace the div#E with the text node (notice div#E is gone)
document.getElementById('E').outerText = 'real!';

console.log(document.body.innerHTML);

// LOGS:
// <div id="A"><strong>Hello there!</strong></div>
// <div id="B" class="new">Hello World!</div>
// <span id="C">Vitor Britto</span>
// <div id="D">Keep it!</div>
// real!

// USING insertAdjacentHTML()
// NOTE: check the 'dom-insert.html' file for details

// IMPORTANT NOTES:

// document.write():
// will stall/block the parsing of the HTML document being loaded.
// Use it to acomplish third-party scripting tasks.

// innerHTML:
// invokes a heavy and expensive HTML parser, whereas text node generation is trivial;

// insertAdjacentHTML():
// options 'beforebegin' and 'afterend' will only work if
// the node is in the DOM tree and has a parent element.


// EXTRACT PARTS OF DOM
// ------------------------------------------------------

// NOTE: check the 'dom-extract.html'























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

// Everything in JavaScript it's an object, except
// by 'null' and 'undefined'. Don't forget that!

// Objects are a sweet way to encapsulate and ensure the reuse
// of your code along a web application.

// JavaScript is not based on classes and instances, is based
// on prototypal inheritance. That means you can create new
// instances of existing objects, rather then instances of classes.

// This extensibility happens by enhancing an existing objet with
// new properties and methods.

// ------------------------------------------------------
// STEP BY STEP
// ------------------------------------------------------

// OBJECT
// ------------------------------------------------------

// First, let's create an object.

// CREATING OBJECTS

// Using the literal way
var obj = {};

// Or the constructor way
function Obj() {}
var obj = new Obj();
console.log(obj);

// The new object inherits from Object.prototype and doesn't have
// own properties defined.

// We create a new empty object
var emptyObject = {};

// Also, we create a new object with 'bar' property and value 'baz'
var foo = {
    bar: 'baz'
};

// ACCESSING PROPERTIES

// So, how can we ACCESS their properties?
// We can access in two ways, with dot notation or square bracket notation

foo.bar; // 'baz'
foo['bar']; // 'baz'

// The notations work almost identically, with the only difference being
// that the square bracket notation allows for dynamic setting of properties
// and the use of property names that would otherwise lead to a syntax error.

// DELETING PROPERTIES

// The right way to remove a property from an object is using the "delete" operator.
// If you set a property to "undefined" or "null", it'll only be removed the value
// associated to this property, but not the key.

var obj = {
    bar: 1,
    foo: 2,
    baz: 3
};

obj.bar = undefined;
obj.foo = null;
delete obj.baz;

for(var i in obj) {
    if (obj.hasOwnProperty(i)) {
        console.log(i, '' + obj[i]);
    }
}

// Return:
// "bar" "undefined"
// "foo" "null"
// baz was successfully removed

// PROTOTYPE
// ------------------------------------------------------

// JavaScript does not have the classical inheritance model,
// it uses a prototypal model.

function Foo() {}
Foo.prototype.bar = 'Hello World';
Foo.prototype.baz = function() {
    // code goes here
};
var test = new Foo();

console.log(test);


// ------------------------------------------------------
// GENERAL GUIDE
// ------------------------------------------------------

// Literal Objects
// --------------------------------

var showDate = function(num) {
    return new Date(num, 0, 1);
};

// Object literal
var javascript = {
    influences: ['Self', 'Scheme', 'Java'],
    developer: 'Brendan Eich',
    created: showDate(1995)
};

var c = {
    influences: ['B', 'ALGOL'],
    developer: 'Dennis Ritchie',
    created: showDate(1972)
};

console.log(javascript);
console.log(c);


// ES5 - Objects
// --------------------------------

// Objects
var animal = {
    breathe: function() {
        return console.log('breathing!');
    },
    walk: function() {
        return console.log('walking!');
    },
    run: function() {
        return console.log('running!');
    },
    sleep: function() {
        return console.log('slepping!');
    },
    wakeup: function() {
        return console.log('waking!');
    }
};

var dog = Object.create(animal, {
    bark: {
        value: function() {
            return console.log('au au!!!');
        }
    }
});

var cat = Object.create(animal, {
    meow: {
        value: function() {
            return console.log('meow!!!');
        }
    }
});

// Properties
Object.defineProperty(dog, 'bite', {
    value: function() {
        return console.log('biting!!!');
    },
    writable: false,
    enumerable: false,
    configurable: false

});

Object.defineProperty(cat, 'scratch', {
    value: function() {
        return console.log('scrathing!!!');
    }
});

Object.defineProperty(Object.getPrototypeOf(dog), 'eat', {
    value: function() {
        return console.log('eating!!!');
    }
});

dog.breathe();
dog.bark();
dog.bite();

cat.wakeup();
cat.meow();
cat.scratch();


// Others
var car = car || {};

car.model = 'Ethios';
car.fabric = 'Toyota';
car.hasOwnProperty('model');

console.log(car);


// ------------------------------------------------------
// COMMON PROBLEMS
// ------------------------------------------------------

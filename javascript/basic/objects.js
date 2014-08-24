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

'use strict';

// FUNCTIONS
// ------------------------------------------------------

// Apply
function add(a,b) {
    return a + b;
}

var arr = [6,2],
    sum = add.apply(null, arr);


console.log(sum);

// Arguments
var sum = function() {
    var sum = 0,
        i   = 0,
        len = arguments.length;

    for (; i < len; i += 1) {
        sum += arguments[i];
    }

    return sum;
};

console.log(sum(1,2,3,4,5,5,6,7,8,9));


// Chain Method
var SomeClass = function() {

    var _this = this;

    this.one = function() {
        console.log('method one!');
        return _this;
    },
    this.two = function() {
        console.log('method two!');
        return _this;
    },
    this.three = function() {
        console.log('method three!');
        return _this;
    },
    this.four = function() {
        console.log('method four!');
        return _this;
    },
    this.five = function() {
        console.log('method five!');
        return _this;
    };

};

var myclass = new SomeClass();

myclass
    .one()
    .two()
    .three()
    .four()
    .five();


// CONSTRUCTORS
// ------------------------------------------------------

// 01
var showDate = function(num) {
    return new Date(num, 0, 1);
};

function Language(developer, created, influences) {
    this.developer = developer;
    this.created = created;
    this.influences = influences;
}

var javascript = new Language(
    'Brendan Eich',
    showDate(1995),
    ['Self', 'Scheme', 'Java']
);

var c = new Language(
    'Dennis Ritchie',
    showDate(1972),
    ['B', 'ALGOL']
);

console.log(javascript);
console.log(c);


// 02
function Person(name, age, place) {
    this.name = name;
    this.age = age;
    this.place = place;
}

Person.prototype.info = function(name, age, place) {
    return console.log(name + ' has ' + age + ' years old and lives in ' + place + '.');
};

var person = new Person();

person.info('Vitor Britto', 33, 'Brazil');
person.info('Douglas Crockford', 73, 'USA');
person.info('Brendan Eich', 53, 'USA');


// Exception
var add = function(a,b) {

    var isNotNan = typeof a !== 'number' || typeof b !== 'number';

    if (isNotNan) {
        throw {
            name: 'TypeError',
            message: 'add needs a number'
        };
    }

    return console.log(a + b);

};

add(5,5);

// Function prototype
Function.prototype.method = function(name, fn) {
    this.prototype[name] = fn;
    return this;
};

Number.method('round', function() {
    return Math[this < 0 ? 'ceil' : 'floor'](this);
});

String.method('spaces', function() {
    return this.replace(/\s/g,'');
});

var sum = 11.2 + 5;
console.log(sum.round());

var str = '   Some    string    here   ';
console.log(str.spaces());


// CONTEXT
// ------------------------------------------------------

// THAT

// Define Object
var obj = {} || obj;

// Create a property
obj.msg = 'Welcome ';

// Create "name" method
obj.name = function(str) {
    return str;
};

// Create "retrieve" method
obj.retrieve = function(str) {

    // Some developers may refer to "this" with
    // "self" or "_this", instead of "that".

    // var _this = this;
    // var self = this;

    var that = this;

    var helper = function() {
        return console.log(that.msg + that.name(str));
    };

    helper();

};

obj.retrieve('Vitor Britto');

// THIS

// Define Object
var obj = {} || obj;

// Create a property
obj.msg = 'The sum is: ';

// Create "add" method
obj.add = function(a, b) {
    return a + b;
};

// Create "retrieve" method
obj.retrieve = function(a, b) {
    return console.log(this.msg + this.add(a, b));
};

obj.retrieve(4,6);


// INVOCATION
// ------------------------------------------------------

// Invoke Method
var obj = {
    value: 1,
    increment: function(inc) {
        this.value += typeof inc === 'number' ? inc : 1;
    }
};

obj.increment();        // 1 + 1
console.log(obj.value); // => 2

obj.increment(5);       // 2 + 5 = 7
console.log(obj.value); // => 7


// Invoke Function
var add = function add(a, b) {
    return a + b;
};

console.log(add(5,5));  // 5 + 5


// Other Invoke Function
var calc = {

    add: function(a, b) {
        return console.log(a + b);
    },
    sub: function(a, b) {
        return console.log(a - b);
    },
    mul: function(a, b) {
        return console.log(a * b);
    },
    div: function(a, b) {
        return console.log(a / b);
    }
};


calc.add(5,5);     // 5 + 5  => 10
calc.sub(10,8);    // 10 - 8 => 2
calc.mul(2,4);     // 2 * 4  => 8

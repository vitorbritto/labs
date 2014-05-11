'use strict';

// ALTERNATIVE 01

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


// ALTERNATIVE 02

function Person(name, age, place) {
    this.name = name;
    this.age = age;
    this.place = place;
}

Person.prototype.info = function(name, age, place) {
    return console.log(name + ' has ' + age + ' years old and lives in ' + place + '.');
};

var person = new Person();

person.info('Vito Britto', 33, 'Brazil');
person.info('Douglas Crockford', 73, 'USA');
person.info('Brendan Eich', 53, 'USA');

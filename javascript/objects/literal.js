'use strict';

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

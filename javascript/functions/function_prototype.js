'use strict';

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

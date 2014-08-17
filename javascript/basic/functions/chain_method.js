'use strict';

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

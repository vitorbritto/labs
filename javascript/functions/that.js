'use strict';

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

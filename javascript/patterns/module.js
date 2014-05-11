;(function(window, document, undefined) {

    'use strict';

    var app = (function() {

        var obj = {} || obj;

        obj._foo = function() {
            return console.log('Private Method');
        };

        obj._bar = function() {
            return console.log('Private Method');
        };

        obj.baz = function() {
            return console.log('Public Method');
        };

        return {
            init: obj.baz
        };

    })();

    window.app = app;

})(window, document);

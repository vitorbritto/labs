;(function(window, document, undefined) {

    'use strict';

    var APP = (function() {

        var obj = {} || obj;

        obj._foo = function(arg1, arg2) {
            return console.log('Private Method');
        };

        obj._bar = function(arg1, arg2) {
            return console.log('Private Method');
        };

        obj.baz = function(arg1, arg2) {
            return console.log('Public Method');
        };

        return {
            init: obj.baz
        };

    })();

    window.APP = APP;

})(window, document);

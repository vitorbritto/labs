'use strict';

var message = function message(name, module) {
    var str = [
        '✖ This task requires ' + name + ' to be installed globally.',
        'Install: <sudo> npm install ' + module + ' -g',
        '✖ Aborting...'
    ].join('\n');

    return str;
};

console.log(message('moduleA', 'moduleA'));

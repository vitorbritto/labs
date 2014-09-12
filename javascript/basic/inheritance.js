'use strict';

// PSEUDO CLASSIC INHERITANCE
// ------------------------------------------------------

var Profile = function(name, age, gender) {
    this.name = name;
    this.age  = age;
    this.gender = gender;
};

Profile.prototype.getInfo = function() {
    var arr = ['Name: ' + this.name,'Age: ' + this.age, 'Gender:' + this.gender].join('\n');
    return console.log(arr);

};

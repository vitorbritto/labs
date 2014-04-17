(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var weather = require('./modules/weather');

var form = document.getElementById('locationForm');
form.onsubmit = function (e) {
    var location = document.getElementById('location').value;
    weather.get(location, function (data) {
        if(data.cod !== 200) {
            return fail(data);
        }
        success(data);
    });
    return false;
};

function success (data) {
    var output = '<h1>' + data.name + ', ' + data.sys.country + '</h1>';
    output += '<p>Temp(&deg;C): ' + data.main.temp + '</p>';
    output += '<p>' + data.weather[0].description + '</p>';
    var element = document.getElementById('output');
    element.innerHTML = output;
}

function fail (data) {
    var output = '<h2>' + data.message + '</h2>';
    var element = document.getElementById('output');
    element.innerHTML = output;
}

},{"./modules/weather":3}],2:[function(require,module,exports){
module.exports = function (url, done) {
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = url;
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(script, s);
    window.jsonpCallback = done;
};

},{}],3:[function(require,module,exports){
var jsonp = require('./jsonp'),
    url   = 'http://api.openweathermap.org/data/2.5/weather?units=metric&callback=jsonpCallback&q=';

exports.get = function (city, done) {
    jsonp(url + city, done);
};

},{"./jsonp":2}]},{},[1])
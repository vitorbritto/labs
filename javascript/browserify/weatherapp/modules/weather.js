var jsonp = require('./jsonp'),
    url   = 'http://api.openweathermap.org/data/2.5/weather?units=metric&callback=jsonpCallback&q=';

exports.get = function (city, done) {
    jsonp(url + city, done);
};

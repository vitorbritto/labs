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

'use strict';

var geocoder, location1, location2;

function initialize() {
    geocoder = new GClientGeocoder();
}

function showLocation() {

    geocoder.getLocations(document.forms[0].address1.value, function (response) {

        if (!response || response.Status.code != 200) {
            console.log('Sorry, we were unable to geocode the first address');
        } else {
            location1 = {
                lat: response.Placemark[0].Point.coordinates[1],
                lon: response.Placemark[0].Point.coordinates[0],
                address: response.Placemark[0].address
            };

            geocoder.getLocations(document.forms[0].address2.value, function (response) {

                if (!response || response.Status.code != 200) {
                    console.log('Sorry, we were unable to geocode the second address');
                } else {
                    location2 = {
                        lat: response.Placemark[0].Point.coordinates[1],
                        lon: response.Placemark[0].Point.coordinates[0],
                        address: response.Placemark[0].address
                    };

                    calculateDistance();
                }

            });

        }

    });
}

function calculateDistance() {
    try {
        var glatlng1 = new GLatLng(location1.lat, location1.lon);
        var glatlng2 = new GLatLng(location2.lat, location2.lon);
        var miledistance = glatlng1.distanceFrom(glatlng2, 3959).toFixed(1);
        var kmdistance = (miledistance * 1.609344).toFixed(1);

        document.getElementById('results').innerHTML = '<strong>Address 1: </strong>' + location1.address + '<br /><strong>Address 2: </strong>' + location2.address + '<br /><strong>Distance: </strong>' + miledistance + ' miles (or ' + kmdistance + ' kilometers)';
    } catch (error) {
        console.log(error);
    }
}

document.addEventListener('DOMContentLoaded', initialize, false);

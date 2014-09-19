'use strict';

// ------------------------------------------------------
// TABLE OF CONTENTS
// ------------------------------------------------------
// 1 - GENERAL NOTES
// 2 - GENERAL GUIDE
// 3 - COMMON PROBLEMS
// ------------------------------------------------------


// ------------------------------------------------------
// GENERAL NOTES
// ------------------------------------------------------


// ------------------------------------------------------
// GENERAL GUIDE
// ------------------------------------------------------


// ------------------------------------------------------
// COMMON PROBLEMS
// ------------------------------------------------------


// PROCESS DATA RETURNED IN XML FORMAT
// ------------------------------------------------------

var responseXML = function() {

    var http = new XMLHttpRequest();

    if (http.readystate === 4 && http.status === 200) {
        var cities = http.responseXML.getElementsByTagName('city');
    }

};


// USING A CROSS BROWSER WAY
// ------------------------------------------------------

var crossResponseXML = function() {
    var parser,
        xml;
    if (window.DOMParser) {
        parser = new DOMParser();
        xml = parser.parserFromString(xmlHttpObj.responseText, 'text/xml');
    } else {
        xml = new ActiveXObject('Microsoft.XMLDOM');
        xml.async = 'false';
        xml.loadXML(xmlHttpObj.responseText);
    }
};

// EXTRACT DATA FROM XML
// ------------------------------------------------------


// CONVERT A JSON TO JAVASCRIPT OBJECT
// ------------------------------------------------------

// OLD METHOD
// That's the old way. Using eval(). This example is just
// to illustrate the mechanism. DO NOT USE IT! EVAL IS NOT GOOD!

var objJSON = '{"name": "projectname", "description": "A new project", "private": 0}',
    objEval = eval('(' + objJSON + ')');

console.log(objEval.name);
console.log(objEval.description);
console.log(objEval.private);

// NEW METHOD
// O ES5 adicionou um suporte nativo para o JSON com o objeto JSON. Não se trata de um objeto complexo, pois o mesmo oferece apenas dois métodos: stringify e parse. Assim como o objeto Math, este é também um objeto estático, o qual voc6e utiliza diretamente.
// JSON.parse(): aceita 2 argumentos, sendo a string formatada e um segundo argumento opcional para uma função de substituição (replacer).
// JSON.stringify(): aceita 3 argumentos, sendo

// USING JSON.parse()
var objJSON = '{"name": "projectname", "description": "A new project", "private": 1}',
    objFunc = function(key, value) {
        if (typeof value === 'number') {
            if (value === 0) {
                value = false;
            } else if (value === 1) {
                value = true;
            }
        }
        return value;
    },
    objParse = JSON.parse(objJSON);

console.log(objParse);

// USING JSON.stringify()
var objLit = {
        name: 'projectname',
        description: 'A new project',
        status: 1
    },
    objArr = ['name', 'description'],
    objParse = JSON.stringify(objLit, objArr, '  ');

console.log(objParse);













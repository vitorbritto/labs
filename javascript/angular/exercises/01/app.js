angular.module('app', ['ui.router'])

    // Router
    .config(function config($stateProvider) {
        $stateProvider.state('index', {
            url: '',
            controller: 'FirstController as first',
            templateUrl: 'templates/first.html'
        })
        $stateProvider.state('second', {
            url: '/second',
            controller: 'SecondController as second',
            templateUrl: 'templates/second.html'
        })
    })

    // Services
    .service('greeting', function Greeting(){
        var greeting = this;
        greeting.message = 'Default';
    })

    // Controller
    .controller('FirstController', function FirstController(greeting) {
        var first = this;
        first.greeting = greeting;
    })
    .controller('SecondController', function SecondController(greeting) {
        var second = this;
        second.greeting = greeting;
    });

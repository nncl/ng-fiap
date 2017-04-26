/**
 * @description
 * Módulo do app.
 */

var app = angular.module('fiapApp', [
    'ngRoute',

    'controllers.agenda',
    'controllers.clinique',
    'controllers.doctor',

    'services.doctor',
    'services.treatment'
]);

app.config(function ($routeProvider) {
    $routeProvider

        .when('/', {
            templateUrl: 'tpl/clinique.html'
        })

        .when('/medicos', {
            templateUrl: 'tpl/doctor.html'
        })

        .when('/agenda', {
            templateUrl: 'tpl/agenda.html'
        })

        .otherwise({
            redirectTo: '/'
        });
});
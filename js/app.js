/**
 * @description
 * Módulo do app.
 */

var app = angular.module('fiapApp', [
    'ngRoute',
    'controllers.clinique',
    'controllers.doctor',
    'services.doctor'
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
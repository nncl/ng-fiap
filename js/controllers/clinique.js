/**
 * @description
 * Clinique Controller.
 */

var app = angular.module('controllers.clinique', []);

app.controller('CliniqueCtrl', function (TreatmentFactory) {
    var vm = this;

    vm.cliniq = {
        "results" : [],
        "isLoading" : true,
        "error" : null,
        "treatments" : TreatmentFactory.getList()
    };

});
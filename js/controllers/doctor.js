/**
 * @description
 * Doctor's Controller.
 */

var app = angular.module('controllers.doctor', []);

app.controller('DoctorCtrl', function (DoctorService) {
    var vm = this;

    vm.doctor = {
        "results" : [],
        "isLoading" : true,
        "error" : null
    };

    DoctorService.getList().then(
        function (res) {
            vm.doctor.results = res.data;
            vm.doctor.isLoading = false;
            vm.doctor.error = false;
        },
        function (err) {
            console.err('Erro ao retornar lista de clínicas', err);
            vm.doctor.isLoading = false;
            vm.doctor.error = err;
        }
    )
});
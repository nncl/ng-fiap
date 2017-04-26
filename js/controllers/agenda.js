/**
 * @description
 * Agenda Controller.
 */

var app = angular.module('controllers.agenda', []);

app.controller('AgendaCtrl', function (TreatmentFactory, DoctorService) {

    // settings

    var vm = this;

    vm.agenda = {
        "treatments" : TreatmentFactory.getList(),
        "doctors" : {
            "results" : [],
            "isLoading" : true,
            "error" : null
        },
        "book" : {
            "booked" : null
        }
    };

    // methods

    /**
     * @description
     * Retorna a lista de médicos.
     */

    var getDoctorsList = function () {
        DoctorService.getList().then(
            function (res) {
                vm.agenda.doctors.results = res.data;
                vm.agenda.doctors.isLoading = false;
                vm.agenda.doctors.error = false;
            },
            function (err) {
                vm.agenda.doctors.isLoading = false;
                vm.agenda.doctors.error = err;
            }
        );
    }();

    /**
     * @description
     * Realiza o submit do formulário de agendamento.
     *
     * @param form
     */

    vm.doBook = function (form) {
        if (form.$valid) {

            // Reset
            vm.agenda.book = {
                "booked" : {
                    "created_at_date" : vm.agenda.book.date,
                    "created_at_time" : vm.agenda.book.time
                }
            };

            form.$setPristine();

        } else {
            console.error('Formulário inválido');
        }
    };

});
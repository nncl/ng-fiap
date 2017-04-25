/**
 * @description
 * Clinique Controller.
 */

var app = angular.module('controllers.clinique', []);

app.controller('CliniqueCtrl', function () {
    var vm = this;

    vm.cliniq = {
        "results" : [],
        "isLoading" : true,
        "error" : null,
        "treatments" : [
            {
                "codigo" : 1,
                "descricao" : "Tratamento de pneumonia. Chega de tossir.",
                "duracao" : "10 dias úteis"
            },
            {
                "codigo" : 2,
                "descricao" : "Tratamento de bronquite. Chega de bronca.",
                "duracao" : "1 dia útil"
            },
            {
                "codigo" : 3,
                "descricao" : "Tratamento de Choque. Tzz...",
                "duracao" : "22 dias úteis"
            },
            {
                "codigo" : 4,
                "descricao" : "Tratamento de gastrite. Não tome ácidos.",
                "duracao" : "4 anos"
            }
        ]
    };

});
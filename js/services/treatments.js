/**
 * @description
 * Treatment Factory.
 */

var app = angular.module('services.treatment', []);

app.service('TreatmentFactory', function ($q, $http) {
    var self = {

        /**
         * @description
         * Retorna a lista de clínicas
         *
         * @returns {*}
         */

        "getList": function () {
            var treatments = [
                {
                    "codigo": 1,
                    "descricao": "Tratamento de pneumonia. Chega de tossir.",
                    "duracao": "10 dias úteis"
                },
                {
                    "codigo": 2,
                    "descricao": "Tratamento de bronquite. Chega de bronca.",
                    "duracao": "1 dia útil"
                },
                {
                    "codigo": 3,
                    "descricao": "Tratamento de Choque. Tzz...",
                    "duracao": "22 dias úteis"
                },
                {
                    "codigo": 4,
                    "descricao": "Tratamento de gastrite. Não tome ácidos.",
                    "duracao": "4 anos"
                }
            ];

            return treatments;
        }
    };

    return self;
});
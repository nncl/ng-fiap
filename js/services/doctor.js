/**
 * @description
 * Doctor Service.
 */

var app = angular.module('services.doctor', []);

app.service('DoctorService', function ($q, $http) {
    var self = {

        /**
         * @description
         * Retorna a lista de clínicas
         *
         * @returns {*}
         */

        "getList": function () {
            var d = $q.defer();

            $http.get('data/list.json')
                .success(function (res) {
                    d.resolve(res);
                })

                .error(function (err) {
                    d.reject(err);
                });

            return d.promise;
        }
    };

    return self;
});
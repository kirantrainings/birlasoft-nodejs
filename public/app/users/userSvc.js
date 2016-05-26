var userSvcFn = function ($http, $q) {
    this.getAllUsers = function () {
        var dfd = $q.defer();

        $http.get('/api/user/getAll')
            .success(function (response) {
                dfd.resolve(response);
            }).error(function (response) {
                dfd.reject("Error")
            })

        return dfd.promise;
    };
    this.loginUser = function (data) {
        var dfd = $q.defer();

        $http.post('/api/user/login', {
                login: data
            })
            .success(function (response) {
                dfd.resolve(response);
            }).error(function (response) {
                dfd.reject("Error")
            })

        return dfd.promise;
    }
};

angular.module('twitterApp')
    .service('userSvc', ['$http', '$q', userSvcFn]);

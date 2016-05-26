var userCtrl = function ($scope, userSvc) {

    userSvc.getAllUsers()
        .then(function (response) {
            $scope.users = response;
            console.log(response);

        }).catch(function (response) {
            console.log(response);
        })
};

angular.module('twitterApp')
    .controller('userCtrl', ['$scope', 'userSvc', userCtrl]);

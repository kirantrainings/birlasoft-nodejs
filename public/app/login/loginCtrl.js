var loginCtrl = function ($scope, userSvc) {
    $scope.login = {};
    $scope.handleLogin = function(){
        userSvc.loginUser($scope.login)
            .then(function(response){
            console.log("User Authenticated")
        }).catch(function(response){
            console.log("User not Authencitated");
        });
    }

};

angular.module('twitterApp')
    .controller('loginCtrl', ['$scope', 'userSvc', loginCtrl]);

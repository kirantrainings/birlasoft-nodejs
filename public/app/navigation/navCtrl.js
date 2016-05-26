angular.module('twitterApp')
    .controller('navCtrl', ['$scope', function ($scope) {
        $scope.navItems = [
            {
                name: "Home",
                templateUrl: "app/home/home.tpl.html"
            },
            {
                name: "Users",
                templateUrl: "app/users/users.tpl.html"
            },
            {
                name: "login",
                templateUrl: "app/login/login.tpl.html"
            },
            {
                name: "register",
                templateUrl: "app/register/register.tpl.html"
            }];

        $scope.loadTemplate = function (item) {
            $scope.selectedTemplate = item.templateUrl;
        };
}])

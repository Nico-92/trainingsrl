var loginController = function($scope, loginService, ipCookie, $location) {
    console.log('no prob')
    $scope.doLogin = function() {
        console.log('no prob 2')
        if ($scope.login.user && $scope.login.password) {
            console.log($scope.login)
            loginService.login($scope.login).success(function(result) {
                if (result === 'true') {
                    // if($scope.rememberMe === true){
                    ipCookie('logged', 'true', {
                        path: '/'
                    });
                    $location.path("/dashboard");

                    // }
                } else {
                    $scope.error = true;
                }
            }).error(function(error) {
                $scope.error = true;
                console.log(error);
            });
        }
    };

}

loginController.$inject = ['$scope', 'loginService', 'ipCookie', '$location'];
app.controller('loginController', loginController);
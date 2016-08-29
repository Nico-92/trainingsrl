var loginController = function($scope, loginService, ipCookie) {
    if (ipCookie('logged') === true) {
        window.location.href = "/dashboard";
    }
    $scope.doLogin = function() {
        console.log('no prob 2')
        if ($scope.login.user && $scope.login.password) {
            loginService.login($scope.login).success(function(result) {
                if (result === 'true') {
                    // if($scope.rememberMe === true){
                    ipCookie('logged', 'true', {
                        path: '/'
                    });
                    window.location.href = "/dashboard";
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

loginController.$inject = ['$scope', 'loginService', 'ipCookie'];
app.controller('loginController', loginController);
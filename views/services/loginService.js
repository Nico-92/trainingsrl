app.factory('loginService', ['$http',
    function($http) {
    	var service = {};
		service.login = login;
    	return service;

        function login(loginParams) {
            return $http({
                method: 'POST',
                url: '/api/login',
                data: {
                    loginParams: loginParams
                }
            });
        }
    }
]);
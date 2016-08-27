app.factory('clientService', ['$http',
    function($http) {
    	var service = {};
		service.post = post;
    	return service;

        function post(object) {
            return $http({
                method: 'POST',
                url: '/api/client',
                data: {
                    object: object
                }
            });
        }
    }
]);
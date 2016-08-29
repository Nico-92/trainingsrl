app.factory('clientService', ['$http',
    function($http) {
    	var service = {};
		service.post = post;
        service.get = get;
        service.del = del;
        service.getClient = getClient;
    	return service;

        function post(object) {
            return $http({
                method: 'POST',
                url: '/api/client',
                data: {
                    object: object
                }
            });
        };

        function get() {
            return $http({
                method: 'GET',
                url: '/api/clients'
            });
        };

        function getClient(id) {
            return $http({
                method: 'GET',
                url: '/api/clients/' + id
            });
        };

        function del(id) {
            return $http({
                method: 'DELETE',
                url: '/api/clients/' + id
            });
        };
    }
]);
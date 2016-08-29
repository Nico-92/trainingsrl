var indexController = function($scope, dataService, clientService, $location) {
    $scope.angular = 'Angular';
    $scope.availableLanguages = dataService.getAvailableLanguagess();
    $scope.knoledgeLevels = dataService.getKnoledgeLevels();
    $scope.availableCourses = dataService.getAvailableCourses();

    $scope.languages = [];
    $scope.courses = [];
    var objectToSend = {};

    $scope.addLanguage = function(name, knoledgeLevel) {
        var language = {
            'name': name,
            'knoledgeLevel': knoledgeLevel
        };
        $scope.languages.push(language);
    };
    $scope.addCourse = function(course) {
        $scope.course.push(course);
    }

    $scope.submit = function(){
    	// _.each($scope.user, function(user){
    	// 	user = user.trim();
    	// 	user = user.charAt(0).toUpperCase() + user.slice(1);
    	// });
    	objectToSend.user = $scope.user;
    	objectToSend.languages = $scope.languages;
    	objectToSend.logistic = $scope.logistic;
    	objectToSend.generalinfo = $scope.generalinfo;
    	objectToSend.health = $scope.health;
        clientService.post(objectToSend).success(function(){
            console.log('successo')
            window.location.href="/successo";
            // $location.path( "/successo" );
        }).error(function(error){
            erroreIscrizione = true;
            console.log(error)
        });
    	console.log(objectToSend);
    }
}

indexController.$inject = ['$scope', 'dataService', 'clientService', '$location'];
app.controller('indexController', indexController);
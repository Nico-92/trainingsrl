var clientsController = function($scope, clientService) {

    function getClient() {
        clientService.get().success(function(result) {
            $scope.sushi = result;
        });
    };

    getClient();

    $scope.sortType = 'name'; // set the default sort type
    $scope.sortReverse = false; // set the default sort order
    $scope.searchFish = ''; // set the default search/filter term
    $scope.delete = function(id) {
        clientService.del(id).success(function(result) {
            getClient();
        });
    };

    // create the list of sushi rolls 
    // $scope.sushi = [{
    //     name: 'Cali Roll',
    //     fish: 'Crab',
    //     tastiness: 2
    // }, {
    //     name: 'Philly',
    //     fish: 'Tuna',
    //     tastiness: 4
    // }, {
    //     name: 'Tiger',
    //     fish: 'Eel',
    //     tastiness: 7
    // }, {
    //     name: 'Rainbow',
    //     fish: 'Variety',
    //     tastiness: 6
    // }];
}

clientsController.$inject = ['$scope', 'clientService'];
app.controller('clientsController', clientsController);
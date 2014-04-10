'use strict';

angular.module('mean.articles').controller('RentalSearchController', ['$scope', '$filter', '$location', function ($scope, $filter, $location) {

    $scope.today = function() {
        $scope.dt = new Date();
    };
    $scope.today();

    $scope.searchRental = function(chosenPlace, from_date, to_date, storageSize) {
        var convertedDateFrom = $filter('date')(from_date, 'yyyy-MM-dd');
        var convertedDateTo = $filter('date')(to_date, 'yyyy-MM-dd');
        console.log('place: ' + chosenPlace);
        console.log('from: ' + convertedDateFrom);
        console.log('to: ' + convertedDateTo);
        console.log('storage: ' + storageSize);

        $location.path('/rentals/searchresults/' + chosenPlace);
    };

    $scope.open = function($event) {
        $event.preventDefault();
        $event.stopPropagation();
        //toDo: do something so that the correct datepicker is opened ;-)
    };
}]);

angular.module('mean.articles').controller('RentalSearchResultController', ['$scope', '$state', function ($scope, $state) {
    $scope.place = $state.params.place;

    $scope.map = {
        center: {
            latitude: 45,
            longitude: -73
        },
        zoom: 8
    };

    /*
    todo: Search
     Søgning til storage:

     1. Søg efter alt pr by
     2. Tag hele dette sæt og undersøge hvilke af dem, der er tættest på søgningen
     3. The Google Geocoding API

     Muligvis kan google hjælpe?
     */

}]);
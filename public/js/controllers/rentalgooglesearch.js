'use strict';

angular.module('mean.articles').controller('RentalSearchController', ['$scope', '$filter', 'GoogleMapHelpers', 'Rentals', function ($scope, $filter, GoogleMapHelpers, Rentals) {
    $scope.map = {
        center: {
            latitude: 45,
            longitude: -73
        },
        zoom: 12,
        dragging: true
    };

    if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            $scope.map.center.latitude = position.coords.latitude;
            $scope.map.center.longitude = position.coords.longitude;

        });
    }

    $scope.today = function() {
        $scope.dt = new Date();
    };
    $scope.today();

    $scope.searchRental = function(chosenPlace, from_date, to_date, storageSize) {
        var convertedDateFrom = $filter('date')(from_date, 'yyyy-MM-dd');
        var convertedDateTo = $filter('date')(to_date, 'yyyy-MM-dd');

        var place = $scope.gPlace.getPlace();

        $scope.map.center.latitude = place.geometry.location.lat();
        $scope.map.center.longitude = place.geometry.location.lng();

        // toDo: do search

        var dataElements = GoogleMapHelpers.getDataElementsFromComponents(place);

        console.log($scope.myMap);
        Rentals.getRentalByCountryAndCity.query({
            country: dataElements[2],
            city: dataElements[0]
        }, function(rentals) {
            var markers = [];
            for (var i = 0; i < rentals.length; i++) {
                var rental = rentals[i];
//                var marker = new google.maps.Marker({
//                    position: new google.maps.LatLng(rental.location.latitude, rental.location.longitude),
//                    title: rental.title
//                });
                var marker = {
                    latitude: rental.location.latitude,
                    longitude: rental.location.longitude,
                    title: rental.title
                }
                markers.push(marker);
            }
            $scope.markers = markers;
            $scope.rentals = rentals;
            console.log($scope.map);
        });
    };

    var onMarkerClicked = function (marker) {
        marker.showWindow = true;
        $scope.$apply();
        //window.alert("Marker: lat: " + marker.latitude + ", lon: " + marker.longitude + " clicked!!")
    };



}]);

angular.module('mean.articles').controller('RentalSearchResultController', ['$scope', '$state', function ($scope, $state) {
    $scope.place = $state.params.place;
    // console.log($scope.gPlace.getPlace().geometry.location.lng());
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
'use strict';

angular.module('mean.rentals').controller('RentalsController', ['$scope', '$stateParams', '$location', 'Global', 'Rentals', 'GoogleMapHelpers',
    function ($scope, $stateParams, $location, Global, Rentals, GoogleMapHelpers) {
    $scope.global = Global;

    $scope.create = function() {
        var place = $scope.gPlace.getPlace();

        var dataElements = GoogleMapHelpers.getDataElementsFromComponents(place);

        var rental = new Rentals({
            title: this.title,
            price: this.price,
            description: this.description,
            location: {
                address: place.formatted_address,
                city: dataElements[0],
                country: dataElements[2],
                region: dataElements[1],
                longitude: place.geometry.location.lng(),
                latitude: place.geometry.location.lat()
            }
        });

        rental.$save(function(response) {
            $location.path('rentals/' + response._id);
        });
        this.title = '';
        this.content = '';
    };

    $scope.find = function() {
        Rentals.query(function(rentals) {
            $scope.rentals = rentals;
        });
    };

    $scope.remove = function(rental) {
        if (rental) {
            rental.$remove();

            for (var i in $scope.rentals) {
                if ($scope.rentals[i] === rental) {
                    $scope.rentals.splice(i, 1);
                }
            }
        }
        else {
            $scope.rental.$remove();
            $location.path('rentals');
        }
    };

    $scope.update = function() {
        var rental = $scope.rental;
        if (!rental.updated) {
            rental.updated = [];
        }
        rental.updated.push(new Date().getTime());

        rental.$update(function() {
            $location.path('rentals/' + rental._id);
        });
    };

    $scope.findOne = function() {
        Rentals.get({
            rentalId: $stateParams.rentalId
        }, function(rental) {
            $scope.rental = rental;
        });
    };
}]);

'use strict';

//Rentals service used for rentals REST endpoint
angular.module('mean.rentals').factory('Rentals', ['$resource', function($resource) {
    var Rental = $resource('rentals/:rentalId', {
        rentalId: '@_id'
    }, {
        update: {
            method: 'PUT'
        }
    });

	return Rental;
}]);
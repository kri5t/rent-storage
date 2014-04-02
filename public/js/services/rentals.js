'use strict';

//Rentals service used for rentals REST endpoint
angular.module('mean.rentals').factory('Rentals', ['$resource', function($resource) {
    return $resource('rentals/:rentalId', {
        rentalId: '@_id'
    }, {
        update: {
            method: 'PUT'
        }
    });
}]);
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

    // Get rentals by country and city
    Rental.getRentalByCountryAndCity =  $resource('rentals/search/:country/:city', {
        country: '@_country',
        city: '@_city'
    });

    return Rental;
}]);
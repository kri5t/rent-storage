'use strict';

angular.module('mean.booking').factory('Bookings', ['$resource', function($resource) {
	var Booking = $resource('bookings/:bookingId', {
		bookingId: '@_id'
	}, {
		update: {
			method: 'PUT'
		}
	});

	return Booking;
}]);
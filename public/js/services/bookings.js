'use strict';

//Articles service used for articles REST endpoint
angular.module('mean.booking').factory('Bookings', ['$resource', function($resource) {
	return $resource('bookings/:bookingId', {
		bookingId: '@_id'
	}, {
		update: {
			method: 'PUT'
		}
	});
}]);
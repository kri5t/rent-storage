'use strict';

angular.module('mean.booking').controller('BookingsController', ['$scope', '$location', 'Bookings', function($scope, $location, Bookings){
	$scope.go = function ( path ) {
		$location.path( path );
	};
	$scope.create = function() {
		var booking = new Bookings({
			to: this.to,
			from: this.from
		});
		booking.$save(function(response) {
			$location.path('/bookings/' + response._id);
		});

		this.to = new Date();
		this.from = new Date();
	};
}]);
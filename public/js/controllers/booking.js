'use strict';

angular.module('mean.booking')
.controller('BookingsController', ['$scope', '$location', '$state', 'Global', 'Bookings', function($scope, $location, $state, Global, Bookings){
	var $global = Global;
	console.log();

	$scope.go = function ( path ) {
		$location.path( path );
	};
	$scope.create = function() {
		var booking = new Bookings({
			to: this.to,
			from: this.from,
			comment: this.comment,
			created: new Date(),
			customer: $global.user._id,
			rental: $state.params.rentalId
		});
		console.log(booking);
		booking.$save(function(response) {
			$location.path('/bookings/' + response._id);
		});
	};

	$scope.to = new Date();
	$scope.from = new Date();
}]);
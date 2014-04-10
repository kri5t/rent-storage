'use strict';

angular.module('mean.booking')
.controller('BookingsController', ['$scope', '$location', '$state', 'Rentals', 'Global', 'Bookings', function($scope, $location, $state, Rentals, Global, Bookings){
	var $global = Global;

	var rental = Rentals.get({rentalId: $state.params.rentalId}, function(rental){
		$scope.owner = rental.user.name;
	});

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
			rental: $state.params.rentalId,
			owner: rental.user._id
		});
		console.log(booking);
		booking.$save(function(response) {
			$location.path('/bookings/' + response._id);
		});
	};

	$scope.to = new Date();
	$scope.from = new Date();
}]);
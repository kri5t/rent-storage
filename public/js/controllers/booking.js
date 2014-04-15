'use strict';

angular.module('mean.booking')
.controller('BookingsController', ['$scope', '$location', '$stateParams', 'Rentals', 'Global', 'Bookings', function($scope, $location, $stateParams, Rentals, Global, Bookings){
	$scope.global = Global;

	var rental = Rentals.get({rentalId: $stateParams.rentalId}, function(rental){
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
			customer: Global.user._id,
			rental: $stateParams.rentalId,
			owner: rental.user._id
		});
		console.log(booking);
		booking.$save(function(response) {
			$location.path('/bookings/' + response._id);
		});
	};

	$scope.to = new Date();
	$scope.from = new Date();

	$scope.findOne = function() {
		Bookings.get({
			bookingId: $stateParams.bookingId
		}, function(booking) {
			$scope.booking = booking;
		});
	};

	$scope.remove = function(booking) {
		if (booking) {

			booking.$remove();

			for (var i in $scope.bookings) {
				if ($scope.bookings[i] === booking) {
					$scope.bookings.splice(i, 1);
				}
			}
		}
		else {
			$scope.booking.$remove();
			$location.path('booking');
		}
	};
}]);
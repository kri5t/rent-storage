'use strict';

angular.module('mean.booking')
.controller('BookingsController', ['$scope', '$location', 'Bookings', function($scope, $location, Bookings){
	$scope.go = function ( path ) {
		$location.path( path );
	};
	$scope.create = function() {
		console.log($scope);
		console.log($location);
		console.log(Bookings);
		var booking = new Bookings({
			to: this.dt,
			from: this.dt
		});
		console.log(booking);
		booking.$save(function(response) {
			$location.path('/bookings/' + response._id);
		});

//		this.to = new Date();
//		this.from = new Date();
	};
}])
.controller('DatetimeController', ['$scope', function($scope) {
	$scope.today = function() {
		$scope.dt = new Date();
	};
	$scope.today();

	$scope.showWeeks = true;
	$scope.toggleWeeks = function () {
		$scope.showWeeks = ! $scope.showWeeks;
	};

	$scope.clear = function () {
		$scope.dt = null;
	};

	// Disable weekend selection
	$scope.disabled = function(date, mode) {
		return ( mode === 'day' && ( date.getDay() === 0 || date.getDay() === 6 ) );
	};

	$scope.toggleMin = function() {
		$scope.minDate = ( $scope.minDate ) ? null : new Date();
	};
	$scope.toggleMin();

	$scope.open = function($event) {
		$event.preventDefault();
		$event.stopPropagation();

		$scope.opened = true;
	};

	$scope.dateOptions = {
		'year-format': 'yy',
		'starting-day': 1
	};

	$scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'shortDate'];
	$scope.format = $scope.formats[0];
}]);
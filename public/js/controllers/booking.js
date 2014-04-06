'use strict';

angular.module('mean.booking').controller('BookingController', ['$scope', '$http', 'Global', 'Booking', function($scope, $http, Global, Booking){
	$scope.findOne = function() {
		$scope.global = Global;
	};
}]);
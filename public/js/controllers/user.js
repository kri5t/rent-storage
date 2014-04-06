'use strict';

angular.module('mean.user').controller('UserController', ['$scope', '$http', 'Global', function($scope, $http, Global){
	$scope.findOne = function() {
		$scope.global = Global;
	};
}]);

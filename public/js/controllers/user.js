'use strict';

angular.module('mean.user').controller('UserController', ['$scope',  'User', 'Global', function($scope, User, Global){
	$scope.findOne = function() {
		$scope.global = Global;
		console.log($scope.global.user._id);
		User.get({
			userId: $scope.global.userId
		}, function(user) {
			$scope.user = user;
		});
	};
}]);

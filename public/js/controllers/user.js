'use strict';

angular.module('mean.user').controller('UserController', [$scope, 'Global', function(){
	$scope.findOne = function() {
		console.log($scope.global.userId);
		users.get({
			userId: $scope.global.userId
		}, function(user) {
			$scope.user = user;
		});
	};
}]);

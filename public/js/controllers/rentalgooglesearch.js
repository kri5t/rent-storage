'use strict';

angular.module('mean.articles').controller('RentalSearchController', ['$scope', '$stateParams', '$location', 'Global', function ($scope, $stateParams, $location, Global,ngGPlacesAPI) {
    $scope.global = Global;

    $scope.details = ngGPlacesAPI.placeDetails({reference:'really_long_reference_id'}).then(
        function (data) {
            console.log(data);
            return data;
        });
  // $scope.gPlace;
}]);
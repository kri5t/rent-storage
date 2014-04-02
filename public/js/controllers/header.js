'use strict';

angular.module('mean.system').controller('HeaderController', ['$scope', 'Global', function ($scope, Global) {
    $scope.global = Global;

    $scope.menu = [{
        'title': 'Articles',
        'link': 'articles'
    }, {
        'title': 'Create New Article',
        'link': 'articles/create'
    },{
        'title': 'Rentals',
        'link': 'rentals'
    }, {
        'title': 'Create New Rental',
        'link': 'rentals/create'
    }];

    $scope.isCollapsed = false;
}]);
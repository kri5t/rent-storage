'use strict';

//Setting up route
angular.module('mean').config(['$stateProvider', '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {
        // For unmatched routes:
        $urlRouterProvider.otherwise('/');

        // states for my app
        $stateProvider
            .state('all articles', {
                url: '/articles',
                templateUrl: 'views/articles/list.html'
            })
            .state('create article', {
                url: '/articles/create',
                templateUrl: 'views/articles/create.html'
            })
            .state('edit article', {
                url: '/articles/:articleId/edit',
                templateUrl: 'views/articles/edit.html'
            })
            .state('article by id', {
                url: '/articles/:articleId',
                templateUrl: 'views/articles/view.html'
            })
            .state('all rentals', {
                url: '/rentals',
                templateUrl: 'views/rentals/list.html'
            })
            .state('create rental', {
                url: '/rentals/create',
                templateUrl: 'views/rentals/create.html'
            })
            .state('edit rental', {
                url: '/rentals/:rentalId/edit',
                templateUrl: 'views/rentals/edit.html'
            })
            .state('rental by id', {
                url: '/rentals/:rentalId',
                templateUrl: 'views/rentals/view.html'
            })
            .state('user', {
                url: '/user',
                templateUrl: 'views/user/view.html'
            })
			.state('create booking', {
				url: '/booking/create/:rentalId',
				templateUrl: 'views/bookings/create.html'
			})
            .state('home', {
                url: '/',
                templateUrl: 'views/index.html'
            });
    }
]);

//Setting HTML5 Location Mode
angular.module('mean').config(['$locationProvider',
    function($locationProvider) {
        $locationProvider.hashPrefix('!');
    }
]);

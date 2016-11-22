angular
	.module('theBestHour', ['ngRoute'])
	.config(config);
	
config.$inject = ['$routeProvider', '$locationProvider'];
function config($routeProvider, $locationProvider) {
	$routeProvider
		.when('/', {
			templateUrl: '/views/index.html',
			controller: 'IndexController',
			controllerAs: 'indexCtrl'
		})
		.when('/happyHours/:happyHourId', {
			templateUrl: '/views/show.html',
			controller: 'ShowController',
			controllerAs: 'showCtrl'
		})
		.when('/happyHours/:happyHourId/reviews', {
			templateUrl: '/views/show.html',
			controller: 'IndexReviewsController',
			controllerAs: 'indexReviewsCtrl'
		})
		.when('/happyHours/:happyHourId/reviews', {
			templateUrl: '/views/show.html',
			controller: 'MaterializeController',
			controllerAs: 'materializeCtrl'
		})
		.when('/happyHours/:happyHourId/reviews/:reviewId', {
			templateUrl: '/views/show.html',
			controller: 'IndexReviewsController',
			controllerAs: 'indexReviewsCtrl'
		}).otherwise({
			redirectTo: '/'
		});

	$locationProvider.html5Mode({
		enabled: true,
		requireBase: false
	});
}

$('.parallax').parallax();
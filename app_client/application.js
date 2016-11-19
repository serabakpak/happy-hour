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
		}).otherwise({
			redirectTo: '/'
		});

	$locationProvider.html5Mode({
		enabled: true,
		requireBase: false
	});
}

// $('.parallax').parallax();
// create module for custom directives
var myApp = angular.module('linkedinAngularApp',['ui.bootstrap', 'linkedinServices']).config(
	[ '$routeProvider', '$locationProvider','$httpProvider',
	function($routeProvider, $locationProvider) {
		$routeProvider.when('/login', {
			templateUrl : 'views/login.html'
		}).when('/person', {
			templateUrl : 'views/person.html',
			controller : 'AppCtrl'
		}).otherwise({
			redirectTo : '/login'
		});
	}
	]);

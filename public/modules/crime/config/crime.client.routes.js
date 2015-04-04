'use strict';

// Setting up route
angular.module('crime').config(['$stateProvider',
	function($stateProvider) {
		// Map View state routing
		$stateProvider
		.state('mapView', {
			url: '/map',
			templateUrl: 'modules/crime/views/map.client.view.html'
		})
		.state('advancedSearch', {
			url: '/advancedsearch',
			templateUrl: 'modules/crime/views/advancedsearch.client.view.html'
		});
	}
]);
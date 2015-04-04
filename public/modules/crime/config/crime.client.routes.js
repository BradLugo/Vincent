'use strict';

// Setting up route
angular.module('crime').config(['$stateProvider',
	function($stateProvider) {
		// Map View state routing
		$stateProvider
		.state('mapView', {
			url: '/Map',
			templateUrl: 'modules/crime/views/map.client.view.html'
		})
		.state('advancedSearch', {
			url: '/AdvanceSearch',
			templateUrl: 'modules/crime/views/advancesearch.client.view.html'
		});
		.state('messageBoard', {
			url: '/MessageBoard',
			templateUrl: 'modules/crime/views/advancedsearch.client.view.html'
		});
	}
]);

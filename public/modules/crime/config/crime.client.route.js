'use strict';

// Setting up route
angular.module('crime').config(['$stateProvider', '$urlRouterProvider',
	function($stateProvider, $urlRouterProvider) {
		// Map View state routing
		$stateProvider.
		state('mapView', {
			url: 'Map',
			templateUrl: 'modules/crime/views/map.client.view.html'
		});

        $stateProvider.
		state('advancedSearch', {
			url: 'AdvancedSearch',
			templateUrl: 'modules/crime/views/advancedSearch.client.view.html'
		});
	}
]);

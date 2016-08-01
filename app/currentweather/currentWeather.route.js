(function() {
    'use strict';

    angular
        .module('CurrentWeather')
        .constant('currentWeatherDefaultRoute', '/cities')
        .config(currentWeatherRouteConfig);

    currentWeatherRouteConfig.$inject = [
    	'$stateProvider'
    ];

    function currentWeatherRouteConfig($stateProvider) {
    	$stateProvider
    		.state('cities', {
    			url: '/cities',
    			templateUrl: 'app/currentweather/cities.html'
    		});
    }
})();
(function() {
    'use strict';

    angular
        .module('WeatherForecastApp.assembly', [
            'CurrentWeather',
            'ui.router'
        ])
        .config(weatherForecastAppRoutesConfig);

    weatherForecastAppRoutesConfig.$inject = [
    	'$urlRouterProvider',
    	'currentWeatherDefaultRoute'
    ];

    function weatherForecastAppRoutesConfig($urlRouterProvider, currentWeatherDefaultRoute) {
    	$urlRouterProvider.otherwise(currentWeatherDefaultRoute);
    };
})();
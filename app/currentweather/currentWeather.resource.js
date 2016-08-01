(function() {
    'use strict';

    angular
        .module('CurrentWeather')
        .factory('currentWeatherResource', currentWeatherResource);

    currentWeatherResource.$inject = ['$resource'];

    /* @ngInject */
    function currentWeatherResource($resource) {

    	function configureCityCurrentWeatherResource() {
    		var apiUrl = 'http://api.openweathermap.org/data/2.5/weather?q=:cityName&units=metric&appid=e99df1c72e1903dbd0e1be8cba731bc5';

    		return $resource(apiUrl);
    	}

        var currentWeatherResourceObject = {
        	cityCurrentWeather: configureCityCurrentWeatherResource
        };

        return currentWeatherResourceObject;
    }
})();
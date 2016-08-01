(function() {
    'use strict';

    angular
        .module('CurrentWeather')
        .controller('citiesCurrentWeatherController', citiesCurrentWeatherController);

    citiesCurrentWeatherController.$inject = [
    	'currentWeatherResource',
    	'citiesList'
    ];

    /* @ngInject */
    function citiesCurrentWeatherController(currentWeatherResource, citiesList) {
        /* Private Attributes Declaration */
        var self = this;
        /* ****************************** */

        /* Public Attributes Declaration */
        self.title = 'citiesCurrentWeatherController';
        self.citiesCurrentWeatherList = [];
        /* ***************************** */

        /* Private Methods Declaration */
        function currentWeatherByCityNameCallback(currentWeather) {            
        	self.citiesCurrentWeatherList.push({cityName: currentWeather.name, weather: currentWeather.weather, main: currentWeather.main});
        }

        function getCurrentWeatherBy(cityName, callback) {
        	currentWeatherResource.cityCurrentWeather().get({cityName: cityName}, callback);
        }

        function fillCitiesCurrentWeatherList() {
        	angular.forEach(citiesList, function(cityName) {
  				getCurrentWeatherBy(cityName, currentWeatherByCityNameCallback);
			}, self.citiesList);	
        }        

        function extractDayOrNight(iconId) {
            return iconId.charAt(iconId.length - 1);
        }
        /* *************************** */

        /* Public Methods Declaration */
        self.getOwfontClasses = function(weatherId, iconId) {
            var dayOrNight = extractDayOrNight(iconId);     

            return 'owf owf-3x owf-pull-left owf-' + weatherId + '-' + dayOrNight;
        }
        
        /* ************************** */

        /* Init */
        function initController() {
        	fillCitiesCurrentWeatherList();
        }

        initController();
        /* **** */
    }
})();
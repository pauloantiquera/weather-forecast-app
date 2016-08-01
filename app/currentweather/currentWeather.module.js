(function() {
    'use strict';

    angular
        .module('CurrentWeather', [
        	'ui.router',
        	'ngResource'
        ])
        .constant('citiesList', [
            'Caruaru',
            'Cascavel',
            'Cuiaba',
            'Curitiba',
            'Francisco Beltrão',
            'Guarapuava',
            'Guarulhos',
            'Capanema',
            'Ampere',
            'Umuarama',
            'Manaus',
            'Aracaju',
            'Recife',
            'Falmouth',
            'Hannover',
            'La Habra',
            'Mountain View',
            'Brussels',
            'Amsterdam',
            'Nairobi',
            'Roma',
            'Nice',
            'Moscow',
            'Cairo',
            'Porto Seguro'
        ]);
})();
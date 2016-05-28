(function(){
	
	'use strict';
	var app = angular.module('ge-services', []);
	
	app.factory('Laberintos', function($resource) {
	    return $resource('/laberintos/1', {'id_usuario' : '@id_usuario'}, {
	    	'query': { method: 'GET' },
	    });
	});
	
	/**
	 * INTENTANDO REALIZAR ACCION
	 */
//	app.factory('RealizarAccion', function($resource) {
//		return $resource()
//	})

})();


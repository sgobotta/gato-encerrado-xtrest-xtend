(function(){
	
	'use strict';
	var app = angular.module('ge-services', []);
	
	var defaultUser = { }; 

	/**
	 * Obtener los laberintos 
	 */
	app.factory('Laberintos', function($resource) {
	    return $resource('/laberintos/:id_usuario', { 'id_usuario' : '@id_usuario' }, {
	    	'query': { method: 'GET' }
	    });
	});
	
	/**
	 * Realizar acción
	 */
	app.factory('RealizarAccion', function($resource) {
		return $resource('/realizar_accion/:habitacion_id/:action_id', { 'habitacion_id' : '@habitacion_id',
			  															 'action_id'     : '@action_id' }, {
            'query': { method: 'GET' }
		});
	});

})();


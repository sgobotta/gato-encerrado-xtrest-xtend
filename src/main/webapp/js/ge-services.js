(function(){
	
	'use strict';
	var app = angular.module('ge-services', []);
	
	var defaultUser = { }; 

	/**
	 * Obtener los laberintos 
	 */
	app.factory('Laberintos', function($resource) {
	    return $resource('/laberintos/:id_usuario', { 'id_usuario' : '@id_usuario' }, {
	    	'query' : { method: 'GET' }
	    });
	});
	
	/**
	 * Iniciar laberinto
	 */
	app.factory('IniciarLaberinto', function($resource) {
		return $resource('/iniciar_laberinto/:user_id/:lab_id', { 'user_id' : '@user_id',
																   'lab_id'  : '@lab_id' }, {   
			'query' : { method: 'GET' }	
		});
	});
	
	/**
	 * Realizar acción
	 */
	app.factory('RealizarAccion', function($resource) {
		return $resource('/realizar_accion/:habitacion_id/:action_id/:user_id', { 'habitacion_id' : '@habitacion_id',
			  															 'action_id'     : '@action_id',
			  															 'user_id'		 : '@user_id' }, {
            'query' : { method: 'GET' }
		});
	});

	/**
	 * Get Usuarios
	 */
	app.factory('GetUsuarios', function($resource) {
		return $resource('/users', {}, {
            'query' : { method: 'GET' , isArray: true}
		});
	});
	
	/**
	 * Login
	 */
	app.factory('LoginUser', function($resource) {
		return $resource('/login/:user_id', { 'user_id'	 : '@user_id' }, {
            'query' : { method: 'GET' }
		});
	});
	
	/**
	 * Logout
	 */
	app.factory('LogoutUser', function($resource) {
		return $resource('/logout/:user_id', { 'user_id'	 : '@user_id' }, {
            'query' : { method: 'GET' }
		});
	});	
	
	/**
	 * Quit game
	 */
	app.factory('QuitGame', function($resource) {
		return $resource('/quitgame/:user_id', { 'user_id'	 : '@user_id' }, {
            'query' : { method: 'GET' }
		});
	});		
	
	/**
	 * Tirar item
	 */
	app.factory('TirarItem', function($resource) {
	    return $resource('/drop_item/:id_usuario/:id_item', { 'id_usuario' : '@id_usuario', 
	    													  'id_item'    : '@id_item'}, {
	    	'query' : { method: 'GET' }
	    });
	});

})();


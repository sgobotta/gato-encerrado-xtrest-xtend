(function() {

	'use strict';
	var app = angular.module('ge-services', []);

	var defaultUser = {};

	/**
	 * Obtener los laberintos
	 */
	app.factory('Laberintos', function($resource) {
		return $resource('/laberintos/:id_usuario', {
			'id_usuario' : '@id_usuario'
		}, {
			'query' : {
				method : 'GET'
			}
		});
	});

	/**
	 * Iniciar laberinto
	 */
	app.factory('IniciarLaberinto', function($resource) {
		return $resource('/iniciar_laberinto/:user_id/:lab_id', {
			'user_id' : '@user_id',
			'lab_id' : '@lab_id'
		}, {
			'query' : {
				method : 'GET'
			}
		});
	});

	/**
	 * Realizar acción
	 */
	app.factory('RealizarAccion', function($resource) {
		return $resource('/realizar_accion/:habitacion_id/:action_id/:user_id',
				{
					'habitacion_id' : '@habitacion_id',
					'action_id' : '@action_id',
					'user_id' : '@user_id'
				}, {
					'query' : {
						method : 'GET'
					}
				});
	});

	app.service('LobbyService', function() {

		this.usuario = {};
		this.laberintos = [];
		this.setUsuario = function(user) {

			this.usuario = user;
		};
		this.setLaberintos = function(labs) {
			this.laberintos = labs;
		};

		this.getLaberintos = function() {
			return this.laberintos;
		};

		this.getUsuario = function() {
			return this.usuario;
		};

	});
	app.service('LoginService', function($http) {
		this.login = function(jsonObject, callback, errorHandler) {
			$http({
				url : 'http://localhost:9001/login',
				method : "POST",
				data : jsonObject,
				headers : {
					'Content-Type' : 'application/x-www-form-urlencoded'
				}
			}).success(callback).error(errorHandler);
		};
		this.signup = function(jsonObject, callback, errorHandler) {
			$http({
				url : 'http://localhost:9001/signup',
				method : "POST",
				data : jsonObject,
				headers : {
					'Content-Type' : 'application/x-www-form-urlencoded'
				}
			}).success(callback).error(errorHandler);
		};
	});
})();

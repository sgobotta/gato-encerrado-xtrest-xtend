(function(){
	
	'use strict';
	var app = angular.module('ge-services', []);
	
	app.factory('Laberintos', function($resource) {
	    return $resource('/laberintos/:id_usuario', {'id_usuario' : '@id_usuario'}, {
	    	'query': { method: 'GET' },
	    });
	});
	
	
})();


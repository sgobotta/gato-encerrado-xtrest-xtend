(function(){
	// El wrapping de nuestra app en una funcion anonima es un buen habito segun los tutos, así que...
	var app = angular.module('ge-main', [ 'ge-controllers', 'ge-services' ]);
	
	app.directive('actionsList', function() {
		return {
		    restrict: 'E',
		    templateUrl: "action_list.html"
		};
	});
	
	app.directive('labList', function() {
		return {
			restrict: 'E',
			templateUrl: 'lab_list.html'
		};
	});
	
	app.directive('gatoEncerradoTitle', function() {
		return {
			restrict: 'E',
			templateUrl: 'gato_encerrado_title.html'
		};
	});
	
	app.directive('itemList', function() {
		return {
			restrict: 'E',
			templateUrl: 'item_list.html'
		};
	});
	
	app.directive('preInitializationWindow', function(){
		return {
			restrict: 'E',
			templateUrl: 'ventana-pre-inicializado.html'
		};
	});


})();
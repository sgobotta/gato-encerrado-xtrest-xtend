(function(){
	// El wrapping de nuestra app en una funcion anonima es un buen habito segun los tutos, así que...
	var app = angular.module('ge-main', [ 'ge-controllers', 'ge-services', 'ngResource' ]);
	
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
	
	app.directive('errorPanelDescription', function(){
		return {
			restrict: 'E',
			templateUrl: 'error_panel.html'
		};
	});
	
	app.directive('habSelected', function(){
		return {
			restrict: 'E',
			templateUrl: 'hab-selected.html'
		};
	});
	
	app.directive('modalWindow', function(){
		return {
			restrict: 'E',
			templateUrl: 'modal_window.html'
		};
	});

})();
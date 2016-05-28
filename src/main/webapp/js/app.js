(function(){
	// El wrapping de nuestra app en una funcion anonima es un buen habito segun los tutos, así que...
	var app = angular.module('ge-main', [ 'ge-controllers', 'ge-services', 'ngResource' ]);
	
	app.directive('actionsList', function() {
		return {
		    restrict: 'E',
		    templateUrl: "views/lists/action_list.html"
		};
	});
	
	app.directive('labList', function() {
		return {
			restrict: 'E',
			templateUrl: 'views/lists/lab_list.html'
		};
	});
	
	app.directive('gatoEncerradoTitle', function() {
		return {
			restrict: 'E',
			templateUrl: 'views/gato_encerrado_title.html'
		};
	});
	
	app.directive('gatoEncerradoFooter', function() {
		return {
			restrict: 'E',
			templateUrl: 'views/gato_encerrado_footer.html'
		};
	});
	
	app.directive('itemList', function() {
		return {
			restrict: 'E',
			templateUrl: 'views/lists/item_list.html'
		};
	});
	
	app.directive('preInitializationWindow', function(){
		return {
			restrict: 'E',
			templateUrl: 'views/ventana-pre-inicializado.html'
		};
	});
	
	app.directive('errorPanel', function(){
		return {
			restrict: 'E',
			templateUrl: 'views/error_panel.html'
		};
	});
	
	app.directive('habScene', function(){
		return {
			restrict: 'E',
			templateUrl: 'views/hab_scene.html'
		};
	});
	
	app.directive('winModalWindow', function(){
		return {
			restrict: 'E',
			templateUrl: 'views/modal/win_modal.html'
		};
	});
	
	app.directive('changeLabModalWindow', function(){
		return {
			restrict: 'E',
			templateUrl: 'views/modal/change_lab_modal.html'
		};
	});
	
	app.directive('welcomePanel', function(){
		return {
			restrict: 'E',
			templateUrl: 'views/welcome.html'
		};
	});

})();
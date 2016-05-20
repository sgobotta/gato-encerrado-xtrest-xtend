(function(){
	// El wrapping de nuestra app en una funcion anonima es un buen habito segun los tutos, así que...
var app = angular.module('ge-main', []);

	app.controller('UserCtrl', [ '$scope' , function($scope){
	
		$scope.user = usuario;
		
	}]);
	
	app.controller('LabListCtrl', [ '$http', '$scope', function($http, $scope){
					
		$scope.laberintos = [{"nombre":"Cueva","habitaciones":[],"last":null,"first":null,"idLaberinto":1,"imagePath":"src/main/entrada.png","jugador":null},{"nombre":"Cascada","habitaciones":[],"last":null,"first":null,"idLaberinto":2,"imagePath":"src/main/exit.png","jugador":null}];
		
		$scope.labSelected = {};
		
		$scope.isLabSelected = false;
		
		$scope.labSelectedChange = function(lab){
			if($scope.isGameInitiated && lab !== $scope.labSelected){
				$scope.finalize();
			};
			$scope.labSelected = lab;
			$scope.isLabSelected = true;
		};
		
		
		// Voy a tener que ver un poco más el codigo ahora que meti $scope.
//		$http.get('/laberintos/1').success(function(data) {
//			
//			$scope.laberintos = data;
//		});
		
	}]);
	
	app.controller('GameStateCtrl', [ '$scope' , function($scope){
		
		$scope.isGameInitiated = false;
		
		$scope.initiatedLab = {};
		
		$scope.isInitiatedLab = function(lab){
			return lab === $scope.initiatedLab && $scope.isGameInitiated;
		};
		
		$scope.initiate = function(lab){
			$scope.isGameInitiated = true;
			$scope.initiatedLab = lab;
		};
		
		$scope.finalize = function(){
			$scope.isGameInitiated = false;
			$scope.initiatedLab = {};
		};
		
	}]);
	
	var usuario = {
		id: 1,
		nombre: "Pepe",
		pass: "1234"
	};
	
//	var lab1 = {
//		nombre: "Caverna Embrujada",
//		imgPath: ""
//	};
//	
//	var lab2 = {
//		nombre: "Paraiso Maldito",
//		imgPath: ""
//	};
//	
//	var lab3 = {
//		nombre: "Asgard",
//		imgPath: ""
//	};
	
	app.directive('actionsList', function() {
		return {
		    restrict: 'A',
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
			restrict: 'A',
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
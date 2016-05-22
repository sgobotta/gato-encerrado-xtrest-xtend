(function(){
	// El wrapping de nuestra app en una funcion anonima es un buen habito segun los tutos, así que...
var app = angular.module('ge-main', []);

	app.controller('UserCtrl', [ '$scope' , function($scope){
	
		$scope.user = usuario;
	
	}]);
	
	app.controller('LabListCtrl', [ '$http', '$scope', function($http, $scope){
					
		$scope.laberintos = [{"nombre":"Cueva","habitaciones":[{"nombre":"Entrada"}],"last":null,"first":{"nombre":"Entrada"},"idLaberinto":1,"imagePath":"http://localhost/static/cueva_hobbit.jpg","jugador":null},{"nombre":"Cascada","habitaciones":[{"nombre":"Catarata"}],"last":null,"first":{"nombre":"Catarata"},"idLaberinto":2,"imagePath":"src/main/exit.png","jugador":null}];
		
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
//		$http.get('http://localhost:9001/laberintos/1').then(function successCallback(data) {
//			$scope.laberintos = data.laberintos;
//		}, function errorCallback(data){
//			
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
//			$scope.$broadcast('labInitialization', lab);
		};
		
		$scope.finalize = function(){
			$scope.isGameInitiated = false;
			$scope.initiatedLab = {};
		};
		
	}]);
	
	app.controller('HabCtrl', [ '$scope' , function($scope){
		// No lo pude hacer andar como quería pero dejo esto por si puedo en otro momento.
		$scope.habSelected = {};
		$scope.habitaciones = {};
		
//		$scope.$on('labInitialization', function(event, data){
//			$scope.habSelected = data.first;
//			$scope.habitaciones = data.habitaciones;
//		});
		
	}]);
	
	var usuario = {
		id: 1,
		nombre: "Pepe",
		pass: "1234"
	};
	
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
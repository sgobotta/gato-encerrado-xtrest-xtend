(function(){
	// El wrapping de nuestra app en una funcion anonima es un buen habito segun los tutos, así que...
var app = angular.module('ge-main', []);

	app.controller('UserCtrl', [ '$scope' , function($scope){
	
		$scope.user = usuario;
	
	}]);
	
	app.controller('LabListCtrl', [ '$http', '$scope', function($http, $scope){
					
		$scope.laberintos = [{"nombre":"Cueva","habitaciones":[],"last":null,"first":null,"idLaberinto":1,"imagePath":"http://localhost/static/cueva_hobbit.jpg","jugador":null},{"nombre":"Cascada","habitaciones":[],"last":null,"first":null,"idLaberinto":2,"imagePath":"src/main/exit.png","jugador":null}];
		
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
//		$http.get("/laberintos/1").then(function success(data) {
//			$scope.laberintos = data.laberintos;
//		}, function error(data){
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
		};
		
		$scope.finalize = function(){
			$scope.isGameInitiated = false;
			$scope.initiatedLab = {};
		};
		
	}]);
	
	app.controller('HabCtrl', [ '$scope' , function($scope){
		// No lo pude hacer andar como quería pero dejo esto por si puedo en otro momento.
		$scope.habSelected = {};
		
		var i;
		for(i = 0; i < $scope.habitaciones.length; i++){
			if($scope.habitaciones[i].first == true){
				$scope.habSelected = $scope.habitaciones[i];
			}
		}
		
	}]);
	
	app.controller("InventoryAndHabListCtrl", [ '$scope' , '$http' , function($scope, $http){
		// Por ahora son las mismas habitaciones y inventario para todos los lab, porque tendría que recibir diferentes
		// datos desde el server, segun el .get de abajo, que retornaría cosas diferentes dependiendo de el labSelected.
		
        // No habría que traer únicamente la habitación inicial?
        // Al realizar una acción de ir a habitación traeríamos ésa habitación en particular.
        // No se si traer todas las hab contaría como información de mas, por eso me entró la duda...
		// Santi B.
		
		$scope.habitaciones = [{"id":1,"imagePath":"src/images/hab/entrada.png","nombreHabitacion":"Entrada","first":true,"last":false,"acciones":[{"id":1,"nombre":"Agarrar mapa","item":{"id":null,"nombre":"mapa","descripcion":null},"itemName":"mapa"}],"items":null,"todosLosItemNames":["mapa"]},{"id":2,"imagePath":"src/images/hab/salida.png","nombreHabitacion":"Salida","first":false,"last":true,"acciones":[{"id":2,"nombre":"Ir a la habitacion Entrada","habitacion":{"id":1,"imagePath":"src/images/hab/entrada.png","nombreHabitacion":"Entrada","first":true,"last":false,"acciones":[{"id":1,"nombre":"Agarrar mapa","item":{"id":null,"nombre":"mapa","descripcion":null},"itemName":"mapa"}],"items":null,"todosLosItemNames":["mapa"]},"itemName":null,"item":null},{"id":3,"nombre":"Agarrar diamante","item":{"id":null,"nombre":"diamante","descripcion":null},"itemName":"diamante"}],"items":null,"todosLosItemNames":["diamante"]}];
		$scope.inventory = [{"id":1,"nombre":"Soga","descripcion":"Que hago con una soga?"},{"id":2,"nombre":"Paracaidas","descripcion":"Un paracaidas en una cueva?!"}];
		
//		$http.get("/iniciar_laberintos/1/"+ $scope.labSelected.idLaberinto).then(function(data){
//			$scope.habitaciones = data.habitaciones;
//			$scope.inventory = data.inventario;
//		});
	}]);
	
	
    app.controller('ItemHoverCtrl', [ '$scope', function($scope){
        
    	$scope.hoveredItem = {};
    	
        $scope.showDescription = function(item) {
    		$scope.hoveredItem = item;
            $scope.descriptionIsVisible = true; 
        };

        $scope.hideDescription = function () {
        	$scope.hoveredItem = {};
        	$scope.descriptionIsVisible = false;
        };
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
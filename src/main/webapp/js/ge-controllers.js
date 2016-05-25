(function() {
	
	var app = angular.module('ge-controllers', []);
	
	app.controller('UserCtrl', [ '$scope' , function($scope){
		
		$scope.user = usuario;
	
	}]);
	
	app.controller('LabListCtrl', [ '$http', '$scope', function($http, $scope){
					
		$scope.laberintos = [];//[{"nombre":"Cueva","habitaciones":[],"last":null,"first":null,"idLaberinto":1,"imagePath":"http://localhost/static/cueva_hobbit.jpg","jugador":null},{"nombre":"Cascada","habitaciones":[],"last":null,"first":null,"idLaberinto":2,"imagePath":"src/main/exit.png","jugador":null}];
		
		$scope.labSelected = {};
		
		$scope.isLabSelected = false;
		
		$scope.labSelectedChange = function(lab){
			if($scope.isGameInitiated && lab !== $scope.labSelected){
				$scope.finalize();
			};
			$scope.labSelected = lab;
			$scope.isLabSelected = true;
		};
		
		$http.get("/laberintos/" + $scope.user.id).then(function success(response) {
			$scope.laberintos = response.data.laberintos;
		}, function error(data){
			
		});
		
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
		$scope.habSelected = {};
		
		$scope.refreshInitialHab = function(){
			var i;
			for(i = 0; i < $scope.habitaciones.length; i++){
				if($scope.habitaciones[i].first == true){
					$scope.habSelected = $scope.habitaciones[i];
				}
			}			
		};
		
		$scope.$on('refreshHabInicial', function(event, args){
			$scope.refreshInitialHab();
		});

		
	}]);
	
	app.controller("InventoryAndHabListCtrl", [ '$scope' , '$http' , function($scope, $http){
		$scope.habitaciones = [];//[{"id":1,"imagePath":"src/images/hab/entrada.png","nombreHabitacion":"Entrada","first":true,"last":false,"acciones":[{"id":1,"nombre":"Agarrar mapa","item":{"id":null,"nombre":"mapa","descripcion":null},"itemName":"mapa"}],"items":null,"todosLosItemNames":["mapa"]},{"id":2,"imagePath":"src/images/hab/salida.png","nombreHabitacion":"Salida","first":false,"last":true,"acciones":[{"id":2,"nombre":"Ir a la habitacion Entrada","habitacion":{"id":1,"imagePath":"src/images/hab/entrada.png","nombreHabitacion":"Entrada","first":true,"last":false,"acciones":[{"id":1,"nombre":"Agarrar mapa","item":{"id":null,"nombre":"mapa","descripcion":null},"itemName":"mapa"}],"items":null,"todosLosItemNames":["mapa"]},"itemName":null,"item":null},{"id":3,"nombre":"Agarrar diamante","item":{"id":null,"nombre":"diamante","descripcion":null},"itemName":"diamante"}],"items":null,"todosLosItemNames":["diamante"]}];
		$scope.inventory = [];//[{"id":1,"nombre":"Soga","descripcion":"Que hago con una soga?"},{"id":2,"nombre":"Paracaidas","descripcion":"Un paracaidas en una cueva?!"}];
		
		
		$scope.initiateLab = function(lab){
			$scope.initiate(lab);
			$scope.labInitiation();
		};
		
		$scope.labInitiation = function() {
			$http.get("/iniciar_laberintos/" + $scope.user.id + "/"+ $scope.labSelected.idLaberinto).then(function(response){
			$scope.habitaciones = response.data.habitaciones;
			$scope.inventory = response.data.inventario;
			$scope.$broadcast('refreshHabInicial', null);
			});
		};
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
	
})();
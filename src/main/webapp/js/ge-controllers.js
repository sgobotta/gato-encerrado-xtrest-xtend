(function() {
	
	var app = angular.module('ge-controllers', []);
	
	app.controller('UserCtrl', [ '$scope', function($scope){
		
		$scope.user = usuario;
	
	}]);
	
	//app.controller('LabListCtrl', [ '$http', '$scope', 'Laberintos', function($http, $scope, Laberintos){
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
		
//		this.getListaDeLaberintos = function() {
//			Laberintos.query(function(data){
//				$scope.laberintos = data.laberintos;
//			}, errorHandler);
//		};
//
//		this.getListaDeLaberintos();
		
	}]);
	
	/**
	 * MODAL WINDOW: Lab changes
	 */

	app.controller('LabChangeModalWindowCtrl', [ '$scope', function($scope) {
		
		$scope.isModalVisible = false;
		$scope.tempLab = {};
		
		$scope.tryChangeLab = function(lab) {
			
			if($scope.isGameInitiated && lab !== $scope.initiatedLab) {
				$scope.isModalVisible = true;
				$scope.tempLab = lab;
			}
			else {
				$scope.labSelectedChange(lab);
				$scope.isModalVisible = false;
			};
		};
		
		$scope.confirm = function(){
			$scope.labSelectedChange($scope.tempLab);
			$scope.tempLab = {};
			$scope.isModalVisible = false;
		};
		
		$scope.deny = function(){
			$scope.tempLab = {};
			$scope.isModalVisible = false;
		};
		
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
			$scope.$broadcast('cleanOldGame');
		};
		
	}]);
	
	app.controller('HabCtrl', [ '$scope' , '$http' , function($scope, $http){
		$scope.habSelected = {};
		
		$scope.refreshInitialHab = function(){
			var i;
			for(i = 0; i < $scope.habitaciones.length; i++){
				if($scope.habitaciones[i].first == true){
					$scope.habSelected = $scope.habitaciones[i];
				}
			}			
		};
		
		$scope.changeHabById = function(idHab){
			var i;
			for(i = 0; i < $scope.habitaciones.length; i++){
				if($scope.habitaciones[i].id == idHab){
					$scope.habSelected = $scope.habitaciones[i];
				}
			}				
		};
		
		$scope.executeAction = function(action){
			$http.get("/realizar_accion/" + $scope.habSelected.id + "/" + action.id).then(function success(response){
				$scope.handleActionExecutionResponse(response.data, action);
			}, function error(response){
				// handle error
			});
		};
		
		
		// Anda todo, pero quizas podríamos agregar una respuesta de error
		// Por ejemplo, si quiero ir usar un item para algo y no lo tengo
		// del server me tendrían que avisar que no lo tengo via una 
		// Respuesta de accion que sea de error y tenga un String mensaje
		// que se use para avisar en algun lado porque no puedo hacer X cosa.
		$scope.handleActionExecutionResponse = function (data, action){
			switch(data.type){
				case "agarrarItem" : 
					{
						$scope.inventory.push(data.item);
						$scope.removeActionFromArray(action);
					};
					break;
				case "usarItem" : 
					{
						$scope.habSelected.acciones.push(data.action);
						$scope.removeItemFromArray(data.item);
						$scope.removeActionFromArray(action);
					};
					break;
				case "irAHabitacion" : 
					{
						$scope.changeHabById(data.idHabitacion);
					};
					break;
				case "ganar" : 
					{
						// Hacer saltar una ventana que dice ganar y demás cosas.
					};
					break;
				default : {}
			}
		};
		
		$scope.removeActionFromArray = function(action){
		    var i = $scope.habSelected.acciones.length;
		    while(i--){
		       if( $scope.habSelected.acciones[i] 
		           &&  $scope.habSelected.acciones[i] === action ){ 
		    	   $scope.habSelected.acciones.splice(i,1);
		       }
		    }
		};
		
		$scope.$on('cleanOldGame', function(){
			$scope.habSelected = {};
		});
		
		$scope.$on('refreshHabInicial', function(){
			$scope.refreshInitialHab();
		});

		
	}]);
	
	app.controller("InventoryAndHabListCtrl", [ '$scope' , '$http' , function($scope, $http){
		$scope.habitaciones = [];
		$scope.inventory = [];		
		
		$scope.initiateLab = function(lab){
			$scope.initiate(lab);
			$scope.labInitiation();
		};
		
		$scope.$on('cleanOldGame', function(){
			$scope.habitaciones = [];
			$scope.inventory = [];
		});
		
		$scope.labInitiation = function() {
			$http.get("/iniciar_laberintos/" + $scope.user.id + "/"+ $scope.labSelected.idLaberinto).then(function(response){
			$scope.habitaciones = response.data.habitaciones;
			$scope.inventory = response.data.inventario;
			$scope.$broadcast('refreshHabInicial');
			});
		};
		
		$scope.removeItemFromArray = function(item){
		    var i = $scope.inventory.length;
		    while(i--){
		       if( $scope.inventory[i] 
		           &&  $scope.inventory[i] === item ){ 
		    	   $scope.inventory.splice(i,1);
		       }
		    }
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
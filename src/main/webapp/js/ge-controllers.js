(function() {
	
	var app = angular.module('ge-controllers', ['ge-services']);
	
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
		
		$scope.isGameWon = false;
		
		$scope.initiatedLab = {};
		
		$scope.isInitiatedLab = function(lab){
			return lab === $scope.initiatedLab && $scope.isGameInitiated;
		};
		
		$scope.initiate = function(lab){
			$scope.isGameInitiated 	= true;
			$scope.initiatedLab 	= lab;
		};
		
		$scope.finalize = function(){
			$scope.isGameInitiated 	= false;
			$scope.initiatedLab 	= {};
			$scope.$broadcast('cleanOldGame');
		};
		
		$scope.$on('gameWon', function(){
			$scope.isGameWon = true;
		});
		
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
						$scope.pickItem(data, action);
					};
					break;
				case "usarItem" : 
					{
						$scope.useItem(data, action);
					};
					break;
				case "irAHabitacion" : 
					{
						$scope.changeHabById(data.idHabitacion);
					};
					break;
				case "ganar" : 
					{
						$scope.$emit('gameWon')
					};
					break;
				case "sinItem" :
					{
						$scope.showItemUsageError(data.extra)
					}
				default : {}
			}
		};
		
		$scope.useItem = function(data, action){
			$scope.habSelected.acciones.push(data.action);
			$scope.removeItemFromArray(data.item);
			$scope.removeActionFromArray(action);
		};
		
		$scope.pickItem = function(data, action){
			$scope.inventory.push(data.item);
			$scope.removeActionFromArray(action);
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
		$scope.inventory 	= [];	
		$scope.itemSelected = {};
		
		$scope.initiateLab = function(lab){
			$scope.initiate(lab);
			$scope.labInitiation();
		};
		
		$scope.$on('cleanOldGame', function(){
			$scope.habitaciones	 = [];
			$scope.inventory	 = [];
		});
		
		$scope.labInitiation = function() {
			$http.get("/iniciar_laberintos/" + $scope.user.id + "/"+ $scope.labSelected.idLaberinto).then(function(response){
			$scope.habitaciones = response.data.habitaciones;
			$scope.inventory 	= response.data.inventario;
			$scope.$broadcast('refreshHabInicial');
			});
		};
		
		$scope.selectItem = function(item){
			$scope.itemSelected = item;
		};
		
		$scope.dropItemSelected = function(){
			// Lo dejo comentado para que no borre el item, porque como en el server
			// no se puede tirar items, nunca se penso en el modelo esta necesidad, 
			// por lo tanto, el item se tira en el frontend, pero el backend nunca se
			// entera que el item no esta más en el inventario del jugador, porque
			// no existe la accion "tirar item". Entonces cuando despues el cliente
			// pide realizar la accion de usar ese item, el server lo hace, aunque en el
			// frontend el item se tiro.
			// Hay que preguntarles a los profes si sacamos el boton o agregamos "tirar item" al modelo.
			// -Juanma.
			//$scope.removeItemFromArray($scope.itemSelected);
		};
		
		$scope.invContainsItem = function(item){
			return $scope.inventory.indexOf(item);
		};
		
		$scope.removeItemFromArray = function(item){
		    var i = $scope.inventory.length;
		    while(i--){
		       if( $scope.inventory[i] 
		           &&  $scope.inventory[i].id === item.id ){ 
		    	   $scope.inventory.splice(i,1);
		       }
		    }
		};
	}]);
	
	
    app.controller('ErrorPanelCtrl', [ '$scope', function($scope){
        
    	$scope.itemNotification = {};
    	
        $scope.showDescription = function(item) {
    		$scope.itemNotification 	= item.descripcion;
            $scope.descriptionIsVisible = true; 
        };

        $scope.hideDescription = function () {
        	$scope.itemNotification 	= {};
        	$scope.descriptionIsVisible = false;
        };
        
        $scope.showItemUsageError = function(nombreItem) {
        	$scope.itemNotification 	= nombreItem + " no está en tu inventario!";
        	$scope.descriptionIsVisible = true;
        };

    }]);
	
	var usuario = {
		id: 1,
		nombre: "Pepe",
		pass: "1234"
	};
	
})();
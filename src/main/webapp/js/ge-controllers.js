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
		
		$scope.executeAction = function(action){
			$http.get("/realizar_accion/" + $scope.habSelected.id + "/" + action.id).then(function success(response){
				$scope.handleActionExecutionResponse(response.data, action);
			}, function error(response){
				// handle error
			});
		};
		
		$scope.handleActionExecutionResponse = function (data){
			switch(data.type){
				// do the cases
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
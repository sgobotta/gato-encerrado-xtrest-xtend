(function(){
	// El wrapping de nuestra app en una funcion anonima es un buen habito segun los tutos, así que...
var app = angular.module('ge-main', []);

	app.controller('UserCtrl', function(){
	
		this.user = usuario;
		
	});
	
	app.controller('LabListCtrl', '$http', [ function($http){
		
		var laberintos = this;
			
		laberintos.labs = [];
		
		//[{"nombre":"Cueva","habitaciones":[],"last":null,"first":null,"idLaberinto":1,"imagePath":"src/main/entrada.png","jugador":null},{"nombre":"Cascada","habitaciones":[],"last":null,"first":null,"idLaberinto":2,"imagePath":"src/main/exit.png","jugador":null}]
		
		this.labSelected = {};
		
		this.isLabSelected = false;
		
		this.labSelectedChange = function(lab){
			this.labSelected = lab;
			this.isLabSelected = true;
		};
		
		// ROTO
		$http.get('/laberintos/1.json').success(function(data) {
			
			laberintos.labs = data;
		});
		
	}]);
	
	var usuario = {
		id: 1,
		nombre: "Pepe",
		pass: "1234"
	};
	
	var lab1 = {
		nombre: "Caverna Embrujada",
		imgPath: ""
	};
	
	var lab2 = {
		nombre: "Paraiso Maldito",
		imgPath: ""
	};
	
	var lab3 = {
		nombre: "Asgard",
		imgPath: ""
	};
	
	app.directive('actionsList', function() {
		return {
		    restrict: 'A',
		    templateUrl: "action_list.html"
		};
	});
	
	app.directive('labList', function() {
		return {
			restrict: 'A',
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

})();
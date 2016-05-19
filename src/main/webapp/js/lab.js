(function){
	
	var app = angular.module('lab', [])
	
	app.directive('labList', function() {
		return {
			restrict: 'A',
			templateUrl: 'lab_list.html',
			controller: function() {
				
				this.laberintos = [{"nombre":"Cueva","habitaciones":[],"last":null,"first":null,"idLaberinto":1,"imagePath":"src/main/entrada.png","jugador":null},{"nombre":"Cascada","habitaciones":[],"last":null,"first":null,"idLaberinto":2,"imagePath":"src/main/exit.png","jugador":null}]
				
				this.labSelected = {};
				
				this.isLabSelected = false;
				
				this.labSelectedChange = function(lab){
					this.labSelected = lab;
					this.isLabSelected = true;
				};
			},
			controllerAs: 'labList'
		}
	})
	
}
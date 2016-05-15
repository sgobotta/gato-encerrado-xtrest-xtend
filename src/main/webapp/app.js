(function(){
	// El wrapping de nuestra app en una funcion anonima es un buen habito segun los tutos, así que...
var app = angular.module('ge-main', []);

	app.controller('UserCtrl', function(){
	
		this.user = usuario;
		
	});
	
	app.controller('LabListCtrl', function(){
		
		this.laberintos = [lab1, lab2, lab3];
		
		this.labSelected = {};
		
		this.isLabSelected = false;
		
		this.labSelectedChange = function(lab){
			this.labSelected = lab;
			this.isLabSelected = true;
		};
		
		
	});
	
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

})();
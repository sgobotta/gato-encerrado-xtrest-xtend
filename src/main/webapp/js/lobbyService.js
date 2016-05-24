app.service('LobbyService',function(){

	this.usuario = {};
	this.laberintos = [];
	this.setUsuario = function(user){

		this.usuario = user;
	};
	this.setLaberintos = function(labs){
		this.laberintos = labs;
	};

	this.getLaberintos = function(){
		return this.laberintos;
	};

	this.getUsuario = function(){
		return this.usuario;
	};

	});

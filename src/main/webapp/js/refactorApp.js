var app = angular.module("ge-main", ["ui.router"]);

app.config(function config($stateProvider) {
	$stateProvider.state("login", {
		url : "",
		controller : "LoginController",
		templateUrl : "./loginTemp.html"
	});
	$stateProvider.state("lobbyPrueba", {
		url : "",
		controller : "LobbyController",
		templateUrl : "./lobbyTemp.html"
	});
});

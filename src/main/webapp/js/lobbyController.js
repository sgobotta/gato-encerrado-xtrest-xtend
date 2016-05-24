app.controller('LobbyController', [ '$scope','LobbyService',
		function($scope, LobbyService) {

			$scope.usuario = LobbyService.usuario;
			$scope.laberintos = LobbyService.laberintos;
			
		} ]);

app.controller('GameController', [
		'$scope',
		'GERestService',
		function($scope, GERestService) {

			$scope.jugador = {};
			$scope.isGameInitiated = false;

			$scope.initiatedLab = {};

			$scope.isInitiatedLab = function(lab) {
				return lab === $scope.initiatedLab && $scope.isGameInitiated;
			};

			$scope.initiate = function(lab) {
				$scope.isGameInitiated = true;
				$scope.initiatedLab = lab;
			};

			$scope.finalize = function() {
				$scope.isGameInitiated = false;
				$scope.initiatedLab = {};
			};
			$scope.iniciarLaberinto = function(id_usuario, id_laberinto) {
				GERestService.iniciarLaberinto(id_usuario, id_laberinto,
						$scope.callbackIniciarLaberinto,
						$scope.errorHandlerIniciarLaberinto);
			};

			$scope.realizarAccion = function(id_accion, id_habitacion) {
				GERestService.realizarAccion(id_accion, id_habitacion,
						$scope.callbackRealizarAccion,
						$scope.errorHandlerRealizarAccion);
			};

			$scope.callbackRealizarAccion = function(data) {
				$scope.jugador = data.jugador;
				alert("funciono call back");
			};
			$scope.errorHandlerRealizarAccion = function(error) {
				$scope.spanLog = error.descripcion;
			};

			$scope.callbackIniciarLaberinto = function(data) {
				$scope.jugador = data.jugador;
				alert("funciono call back");
			};
			$scope.errorHandlerIniciarLaberinto = function(error) {
				$scope.spanLog = error.descripcion;
			};
		} ]);
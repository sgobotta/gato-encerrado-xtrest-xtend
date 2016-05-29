(function() {

	var app = angular.module('ge-controllers', [ 'ge-services' ]);

	app.controller('LoginController', ['$scope', 'LobbyService','LoginService','$state',function($scope, LobbyService, LoginService, $state) {

		$scope.login = {};
		$scope.login.account = {};
		$scope.login.account.username = "";
		$scope.login.account.password = "";

		$scope.loginFailure = false;
		$scope.loginSpanLog = "";

		$scope.ingresar = function() {
			LoginService.login($scope.login, $scope.callbackLogin,
					$scope.errorHandlerLogin);
		};
		$scope.callbackLogin = function(data) {
			var nuevoUser = data.usuario;
			var labs = data.laberintos;
			LobbyService.setUsuario(nuevoUser);
			LobbyService.setLaberintos(labs);
			$state.go('lobby');

		};
		$scope.errorHandlerLogin = function(error) {
			$scope.loginSpanLog = error.descripcion;
			$scope.loginFailure = true;
		};

		// /////////////////////////////////////////////////////////////////////////////////////////////

		$scope.signup = {};
		$scope.signup.account = {};
		$scope.signup.account.username = "";
		$scope.signup.account.password = "";
		$scope.signup.repeatpassword = "";

		$scope.signUpFailure = false;
		$scope.signUpSpanLog = "";

		$scope.registrar = function() {
			LoginService.signup($scope.signup, $scope.callbackSignUp,
					$scope.errorHandlerSignUp);
		};
		$scope.callbackSignUp = function(data) {
		};
		$scope.errorHandlerSignUp = function(error) {
			$scope.signUpSpanLog = error.descripcion;
			$scope.signUpFailure = true;
		};
	} ]);	
	
	app.controller('LobbyController', [ '$scope', 'LobbyService',
			function($scope, LobbyService) {

				$scope.usuario = LobbyService.usuario;
				$scope.laberintos = LobbyService.laberintos;
			} ]);

	app.controller('LabListCtrl', [ '$scope', 'Laberintos',
			function($scope, Laberintos) {

				$scope.laberintosCompletados = [];

				$scope.labSelected = {};

				$scope.isLabSelected = false;

				$scope.labSelectedChange = function(lab) {
					if ($scope.isGameInitiated && lab !== $scope.labSelected) {
						$scope.finalize();
					}
					;
					$scope.labSelected = lab;
					$scope.isLabSelected = true;
				};

				$scope.addCompletedLab = function(id) {
					$scope.laberintosCompletados.push(id);
				};

				$scope.isCompletedLab = function(id) {
					if ($scope.laberintosCompletados.indexOf(id) === -1) {
						return false;
					} else {
						return true;
					}
				};

				$scope.$on('addCompletedLab', function(event, id) {
					$scope.addCompletedLab(id);
				});

				this.getListaDeLaberintos = function() {
					Laberintos.query({
						id_usuario : $scope.user.id
					}, function(data) {
						$scope.laberintos = data.laberintos;
					});
				};

				this.getListaDeLaberintos();

			} ]);

	app.controller('LabChangeModalWindowCtrl', [
			'$scope',
			function($scope) {

				// $('#changeLabModalWindow').modal({ show: false });
				// probablemente a ser borrado cuando revisemos todo al final.

				$scope.tempLab = {};
				$scope.changeLabAlert = {};
				$scope.changeLabMessage = {};

				$scope.tryChangeLab = function(lab) {

					if ($scope.isGameInitiated && lab !== $scope.initiatedLab) {
						$scope.changeLabAlert = 'Estas saliendo de '
								+ $scope.initiatedLab.nombreLaberinto;
						$scope.changeLabMessage = 'Queres comenzar a jugar en '
								+ lab.nombreLaberinto + '?';
						$('#changeLabModalWindow').modal('show');
						$scope.tempLab = lab;
					} else {
						$scope.labSelectedChange(lab);
					}
					;
				};

				$scope.confirmLabChange = function() {
					$scope.labSelectedChange($scope.tempLab);
					$scope.tempLab = {};
				};

				$scope.deny = function() {
					$scope.tempLab = {};
				};

			} ]);

	app.controller('GameStateCtrl', [
			'$scope',
			function($scope) {

				$scope.isGameInitiated = false;

				$scope.initiatedLab = {};

				/**
				 * Win Modal Window
				 */
				$scope.modalAlertToDisplay = {};
				$scope.modalMessageToDisplay = {};

				$scope.isInitiatedLab = function(lab) {
					return lab === $scope.initiatedLab
							&& $scope.isGameInitiated;
				};

				$scope.initiate = function(lab) {
					$scope.isGameInitiated = true;
					$scope.initiatedLab = lab;
				};

				$scope.finalize = function() {
					$scope.isGameInitiated = false;
					$scope.initiatedLab = {};
					$scope.$broadcast('cleanOldGame');
				};

				$scope.$on('gameWon', function() {
					$scope.modalMessageToDisplay = 'Has conseguido escapar de '
							+ $scope.initiatedLab.nombreLaberinto;
					$scope.modalAlertToDisplay = 'Ganaste!';
					$('#winModalWindow').modal('show');
					$scope.$broadcast('addCompletedLab',
							$scope.initiatedLab.idLaberinto);
					$scope.finalize();
				});

			} ]);

	app.controller('HabCtrl', [
			'$scope',
			'RealizarAccion',
			function($scope, RealizarAccion) {
				$scope.habSelected = {};

				$scope.refreshInitialHab = function() {
					var i;
					for (i = 0; i < $scope.habitaciones.length; i++) {
						if ($scope.habitaciones[i].first == true) {
							$scope.habSelected = $scope.habitaciones[i];
						}
					}
				};

				$scope.changeHabById = function(idHab) {
					var i;
					for (i = 0; i < $scope.habitaciones.length; i++) {
						if ($scope.habitaciones[i].id == idHab) {
							$scope.habSelected = $scope.habitaciones[i];
						}
					}
				};

				/**
				 * Realizar acción service
				 */
				$scope.executeAction = function(action) {
					var urlParams = {
						habitacion_id : $scope.habSelected.id,
						action_id : action.id,
						user_id : $scope.user.id
					};
					RealizarAccion.query(urlParams, function(data) {
						$scope.handleActionExecutionResponse(data, action);
					});
				};

				/**
				 * Handler para los tipos de acción
				 */
				$scope.handleActionExecutionResponse = function(data, action) {
					switch (data.type) {
					case "agarrarItem": {
						$scope.pickItem(data, action);
					}
						;
						break;
					case "usarItem": {
						$scope.useItem(data, action);
					}
						;
						break;
					case "irAHabitacion": {
						$scope.changeHabById(data.idHabitacion);
					}
						;
						break;
					case "ganar": {
						$scope.$emit('gameWon');
					}
						;
						break;
					case "sinItem": {
						$scope.showItemUsageError(data.extra);
					}
						;
					default: {
					}
						;
					}
				};

				$scope.useItem = function(data, action) {
					$scope.habSelected.acciones.push(data.action);
					$scope.removeItemFromArray(data.item);
					$scope.removeActionFromArray(action);
				};

				$scope.pickItem = function(data, action) {
					$scope.inventory.push(data.item);
					$scope.removeActionFromArray(action);
				};

				$scope.removeActionFromArray = function(action) {
					var i = $scope.habSelected.acciones.length;
					while (i--) {
						if ($scope.habSelected.acciones[i]
								&& $scope.habSelected.acciones[i] === action) {
							$scope.habSelected.acciones.splice(i, 1);
						}
					}
				};

				$scope.$on('cleanOldGame', function() {
					$scope.habSelected = {};
				});

				$scope.$on('refreshHabInicial', function() {
					$scope.refreshInitialHab();
				});

			} ]);

	app.controller("InventoryAndHabListCtrl", [
			'$scope',
			'IniciarLaberinto',
			function($scope, IniciarLaberinto) {
				$scope.habitaciones = [];
				$scope.inventory = [];
				$scope.itemSelected = {};

				$scope.initiateLab = function(lab) {
					$scope.initiate(lab);
					$scope.labInitiation();
				};

				$scope.$on('cleanOldGame', function() {
					$scope.habitaciones = [];
					$scope.inventory = [];
				});

				$scope.executeAction = function(action) {
					var urlParams = {
						habitacion_id : $scope.habSelected.id,
						action_id : action.id,
						user_id : $scope.user.id
					};
					RealizarAccion.query(urlData, function(data) {
						$scope.handleActionExecutionResponse(data, action);
					});
				};

				$scope.labInitiation = function() {
					var urlParams = {
						user_id : $scope.user.id,
						lab_id : $scope.labSelected.idLaberinto
					};
					IniciarLaberinto.query(urlParams, function(data) {
						$scope.habitaciones = data.habitaciones;
						$scope.inventory = data.inventario;
						$scope.$broadcast('refreshHabInicial');
					});
				};

				$scope.selectItem = function(item) {
					$scope.itemSelected = item;
				};

				$scope.dropItemSelected = function() {
					// Lo dejo comentado para que no borre el item, porque como
					// en el server
					// no se puede tirar items, nunca se penso en el modelo esta
					// necesidad,
					// por lo tanto, el item se tira en el frontend, pero el
					// backend nunca se
					// entera que el item no esta más en el inventario del
					// jugador, porque
					// no existe la accion "tirar item". Entonces cuando despues
					// el cliente
					// pide realizar la accion de usar ese item, el server lo
					// hace, aunque en el
					// frontend el item se tiro.
					// Hay que preguntarles a los profes si sacamos el boton o
					// agregamos "tirar item" al modelo.
					// -Juanma.
					// $scope.removeItemFromArray($scope.itemSelected);
				};

				// Esto no se donde se usa tampoco...
				// No me acuerdo si lo implemente yo, sino fijate si lo usamos y
				// borralo sino lo usamos.
				// -Juanma.
				$scope.invContainsItem = function(item) {
					return $scope.inventory.indexOf(item);
				};

				$scope.removeItemFromArray = function(item) {
					var i = $scope.inventory.length;
					while (i--) {
						if ($scope.inventory[i]
								&& $scope.inventory[i].id === item.id) {
							$scope.inventory.splice(i, 1);
						}
					}
				};
			} ]);

	app.controller('ErrorPanelCtrl', [
			'$scope',
			'$timeout',
			function($scope, $timeout) {

				$scope.itemNotification = {};
				$scope.promiseTimeout = {};

				$scope.showDescription = function(item) {
					$scope.itemNotification = item.descripcion;
					$scope.descriptionIsVisible = true;
				};

				$scope.hideDescription = function() {
					$scope.itemNotification = {};
					$scope.descriptionIsVisible = false;
				};

				$scope.showItemUsageError = function(nombreItem) {
					$timeout.cancel($scope.promiseTimeout);
					$scope.itemNotification = nombreItem
							+ " no está en tu inventario!";
					$scope.descriptionIsVisible = true;
					$scope.promiseTimeout = $timeout(function() {
						$scope.hideDescription();
					}, 2500);
				};

			} ]);

	var usuario = {
		id : 1,
		nombre : "Pepe",
		pass : "1234"
	};

})();
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
				$state.go('lobbyPrueba');

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
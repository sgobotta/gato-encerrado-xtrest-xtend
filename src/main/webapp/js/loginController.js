app.controller('LoginController', ['$scope', 'LobbyService','LoginService','$state',function($scope, LobbyService, LoginService, $state) {

			$scope.login = {};
			$scope.login.username = "";
			$scope.login.password = "";


			
			$scope.loginFailure = false;
			$scope.loginSpanLog = "";

			$scope.ingresar = function() {
				LoginService.login($scope.login, $scope.callbackLogin,
						$scope.errorHandlerLogin);
			};
			$scope.callbackLogin = function(data) {
				alert("logeando");
				var nuevoUser = data.account.usuario;
				var labs = data.account.usuario.laberintos;
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
			$scope.signup.username = "";
			$scope.signup.password = "";
			$scope.signup.repeatpassword = "";

			$scope.signUpFailure = false;
			$scope.signUpSpanLog = "";

			$scope.registrar = function() {
				LoginService.signup($scope.signup, $scope.callbackSignUp,
						$scope.errorHandlerSignUp);
			};
			$scope.callbackSignUp = function(data) {
				alert("cuenta creada");
			};
			$scope.errorHandlerSignUp = function(error) {
				$scope.signUpSpanLog = error.descripcion;
				$scope.signUpFailure = true;
			};
		} ]);
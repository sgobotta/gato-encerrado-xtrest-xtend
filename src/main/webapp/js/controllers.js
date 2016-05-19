angular.module('loginApp.controllers').controller(
		'LoginController',
		[
				'$scope',
				'LoginService',
				function($scope, LoginService) {

					$scope.login = {};
					$scope.login.username = "";
					$scope.login.password = "";
					$scope.loginFailure = false;
					$scope.spanLog = "";

					$scope.ingresar = function() {
						LoginService.login($scope.login, $scope.callback,
								$scope.errorHandler);
					};
					$scope.callback = function(data) {
						var nuevoUser = data.id;
						alert("funciono call back");
					};
					$scope.errorHandler = function(error) {
						$scope.spanLog = error.descripcion;
						$scope.loginFailure = true;
					};
				} ]);
angular.module('loginApp.controllers').controller(
		'SignUpController',
		[
				'$scope',
				'LoginService',
				function($scope, LoginService) {

					$scope.signup = {};
					$scope.signup.username = "";
					$scope.signup.password = "";
					$scope.signup.repeatpassword = "";

					$scope.registrar = function() {
						LoginService.signup($scope.signup, $scope.callback,
								$scope.errorHandler);
					};
					$scope.callback = function(data) {
						var nuevoUser = data.id;
						alert("funciono call back");
					};
					$scope.errorHandler = function(error) {
						$scope.spanLog = error.descripcion;
						$scope.loginFailure = true;
					};
				} ]);

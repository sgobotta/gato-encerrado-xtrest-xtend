var loginApp = angular.module("loginApp", []);

loginApp.controller('LoginController', function($scope, LoginService, $window) {

	$scope.login = {};
	$scope.login.username = "";
	$scope.login.password = "";
	$scope.loginFailure = false;
	$scope.spanLog = "";

	$scope.ingresar = function() {
		LoginService.login($scope.login, $scope.callback, $scope.errorHandler);
	};
	$scope.callback = function(data) {
		var nuevoUser = data.id;
		alert("funciono call back");
		//hay que cambiarlo pero ya funcioan el post
        var url = "http://" + $window.location.host;
        $window.location.href = url;
		
	};
	$scope.errorHandler = function(error) {
		$scope.spanLog = error.descripcion;
		$scope.loginFailure = true;
	};
});
loginApp.controller('SignUpController', function($scope, LoginService) {

	$scope.signup = {};
	$scope.signup.username = "";
	$scope.signup.password = "";
	$scope.signup.repeatpassword = "";

	$scope.registrar = function() {
		LoginService
				.signup($scope.signup, $scope.callback, $scope.errorHandler);
	};
	$scope.callback = function(data) {
		var nuevoUser = data.id;
		alert("funciono call back");
	};
	$scope.errorHandler = function(error) {
		$scope.spanLog = error.descripcion;
		$scope.loginFailure = true;
	};
});

loginApp.service("LoginService", function($http) {
	this.login = function(jsonObject, callback, errorHandler) {
		$http({
			url : 'http://localhost:9001/login',
			method : "POST",
			data : jsonObject,
			headers : {
				'Content-Type' : 'application/x-www-form-urlencoded'
			}
		}).success(callback).error(errorHandler);
	};
	this.signup = function(jsonObject, callback, errorHandler) {
		$http({
			url : 'http://localhost:9001/signup',
			method : "POST",
			data : jsonObject,
			headers : {
				'Content-Type' : 'application/x-www-form-urlencoded'
			}
		}).success(callback).error(errorHandler);
	};
});
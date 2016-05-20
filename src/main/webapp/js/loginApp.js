//no puedo crear los controllers y servicios en archivos separados dsp lo vemos

var loginApp = angular.module("loginApp", []);

loginApp.controller('LoginController', function($scope, LoginService, $window) {

	$scope.login = {};
	$scope.login.username = "";
	$scope.login.password = "";
	$scope.loginFailure = false;
	$scope.loginSpanLog = "";
	
	$scope.ingresar = function() {
		LoginService.login($scope.login, $scope.callback, $scope.errorHandler);
	};
	$scope.callback = function(data) {
		alert("logeando");
		//hay que cambiarlo pero ya funcioan el post
        var url = "http://" + $window.location.host;
        $window.location.href = url;
		
	};
	$scope.errorHandler = function(error) {
		$scope.loginSpanLog = error.descripcion;
		$scope.loginFailure = true;
	};
	$scope.showError = function(){
	    $timeout(3000);
		$scope.loginFailure = false;
		alert($scope.loginSpanLog)
	}
});
loginApp.controller('SignUpController', function($scope, LoginService) {

	$scope.signup = {};
	$scope.signup.username = "";
	$scope.signup.password = "";
	$scope.signup.repeatpassword = "";

	$scope.signUpFailure = false;
	$scope.signUpSpanLog = "";	
	
	$scope.registrar = function() {
		LoginService
				.signup($scope.signup, $scope.callback, $scope.errorHandler);
	};
	$scope.callback = function(data) {
		alert("cuenta creada");
	};
	$scope.errorHandler = function(error) {
		$scope.signUpSpanLog = error.descripcion;
		$scope.signUpFailure = true;
	};
	$scope.showError = function(){
	    $timeout(3000);
		$scope.signUpFailure = false;
		alert($scope.signUpSpanLog)
	}
});

loginApp.service("LoginService", function($http) {
	
	this.httpFunction = function(url, method, user, callback, errorHandler){
		$http({
			url : url,
			method : method,
			data : user,
			headers : {
				'Content-Type' : 'application/x-www-form-urlencoded'
			}
		}).success(callback).error(errorHandler);
		
	};
	
	this.login = function(user, callback, errorHandler){
		this.httpFunction('http://localhost:9001/login', "POST", user, callback, errorHandler);		
	};

	this.signup = function(user, callback, errorHandler) {
		this.httpFunction('http://localhost:9001/signup', "POST", user, callback, errorHandler);
	};
});
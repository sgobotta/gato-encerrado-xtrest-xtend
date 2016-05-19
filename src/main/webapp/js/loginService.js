angular.module('loginApp').service('LoginService', function($http) {
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
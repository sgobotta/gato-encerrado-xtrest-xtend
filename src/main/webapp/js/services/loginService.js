app.service("LoginService", function($http) {

	this.httpFunction = function(url, method, user, callback, errorHandler) {
		$http({
			url : url,
			method : method,
			data : user,
			headers : {
				'Content-Type' : 'application/json'
			}
		}).success(callback).error(errorHandler);

	};

	this.login = function(user, callback, errorHandler) {
		this.httpFunction('http://localhost:9001/login', "POST", user,
				callback, errorHandler);
	};

	this.signup = function(user, callback, errorHandler) {
		this.httpFunction('http://localhost:9001/signup', "POST", user,
				callback, errorHandler);
	};
});
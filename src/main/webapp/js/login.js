app.service("LoginService", function($http) {

	this.httpFunction = function(url, method, pedido, callback, errorHandler) {
		$http({
			url : url,
			method : method,
			data : pedido,
			headers : {
				'Content-Type' : 'application/json'
			}
		}).success(callback).error(errorHandler);

	};

	this.login = function(pedidoLogin, callback, errorHandler) {
		this.httpFunction('http://localhost:9001/login', "POST", pedidoLogin,
				callback, errorHandler);
	};

	this.signup = function(pedidoSignUp, callback, errorHandler) {
		this.httpFunction('http://localhost:9001/signup', "POST", pedidoSignUp,
				callback, errorHandler);
	};
});
app.service('GERestService',
		function($http) {
			this.httpFunction = function(url, method, callback, errorHandler) {
				$http({
					url : url,
					method : method,
				}).success(callback).error(errorHandler);

			};
			this.realizarAccion = function(idA, idH, callback, errorHandler) {
				var url = 'http://localhost:9001/realizar_accion/' + idH + '/'	+ idA;
				this.httpFunction(url, "GET", callback, errorHandler);
			};
			this.iniciarLaberinto = function(idU, idL, callback, errorHandler) {
				var url = 'http://localhost:9001/iniciar_laberintos/' + idU	+ '/' + idL;
				this.httpFunction(url, "GET", callback, errorHandler);
			};

			// lo hacemos en login
			this.laberintos = function(id_usuario, callback, errorHandler) {
				var url = 'http://localhost:9001/laberintos/' + id_usuario;
				this.httpFunction(url, "GET", callback, errorHandler);
			};
		});
(function(){
	var app = angular.module('lab', []);
	
	app.directive('labList', function() {
		return {
			restrict: 'A',
			templateUrl: 'lab_list.html'
		};
	});
	
});
(function(){
	var app = angular.module('actions', []);
	
	app.directive('actionList', function() {
		return {
			restrict: 'A',
			templateUrl: 'action_list.html'
		};
	});
	
});
(function(){
	var app = angular.module('items', []);
	
	app.directive('itemList', function() {
		return {
			restrict: 'A',
			templateUrl: 'item_list.html'
		};
	});
	
});
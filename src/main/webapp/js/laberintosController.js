app.controller('LabListCtrl', [ '$http', '$scope', function($http, $scope) {

	$scope.labSelected = {};

	$scope.isLabSelected = false;

	$scope.labSelectedChange = function(lab) {
		if ($scope.isGameInitiated && lab !== $scope.labSelected) {
			$scope.finalize();
		}
		$scope.labSelected = lab;
		$scope.isLabSelected = true;
	};
} ]);
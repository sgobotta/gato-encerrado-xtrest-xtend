var loginApp = angular.module('loginApp',[]);

loginApp.controller('LoginCtrl', function($scope, $http, $window){


	$scope.username = $scope.username || "";
	$scope.password = $scope.password || "";
	
	$scope.urlToPost = 'localhost:9001/login'
	
//	$scope.user = {} || "";
    $scope.submitLoginForm = function() {
    var jsonform = {
    		method  : 'POST',
            url     : '/login'
            data    : {$scope.username, $scope.password}//$scope.user,
            headers : {'Content-Type': 'application/x-www-form-urlencoded'}
    }
    //ver como submitear forms
    $scope.submitForm = function() {
        console.log("posting data....");
        $http.post('/login', jsonform)).success(function(){
        	$window.alert('voy a logear')}), 
        function errorCallback(data){
	  		$window.alert('No voy a logear')});
        }
});

loginApp.controller('SignUpCtrl', function($scope, $http){


	$scope.username = $scope.username;
	$scope.password = $scope.password;
	$scope.repeatpassword = $scope.repeatpassword;

    $scope.submitSignUpForm = function() {
    // Posting data to php file
    $http({
      method  : 'POST',
      url     : '/signup',
      data    : {$scope.username, $scope.password, $scope.repeatpassword},
      headers : {'Content-Type': 'application/x-www-form-urlencoded'} 
     })
      .success(function(data) {
        if (data.errors) {
          // Showing errors.
          $scope.errorUserName = data.errors.username;
          $scope.errorPassword = data.errors.password;
          $scope.errorRepeatPassword = data.errors.repeatpassword;
        } else {
          $scope.message = data.message;
        }
      });
    };
})
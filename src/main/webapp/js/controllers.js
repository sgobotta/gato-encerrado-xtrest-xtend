var loginApp = angular.module('loginApp',[]);

loginApp.controller('LoginCtrl', function($scope, $http, $window){


	$scope.username = $scope.username || "";
	$scope.password = $scope.password || "";
	$scope.user = {};
	$scope.urlToPost = 'localhost:9001/login';
	
//	$scope.user = {} || "";
    $scope.submitLoginForm = function() {
    var formpost = {
    		method  : 'POST',
            url     : '/login',
            data    : {},//$scope.user,
            headers : {'Content-Type': 'application/x-www-form-urlencoded'}
    };
    var formjson = JSON.stringify(user);
    //ver como submitear forms
    console.log("posting data....");
    $http.post('/login', form, {headers: {'Content-Type': 'application/json'} })
    	.success(function(data, status, headers, config){
        	$window.alert('me logee');
        	console.log(data);
        })
        .error(function (data, status, headers, config){
        	$window.alert('No pude registrarme');
        });
};


loginApp.controller('SignUpCtrl', function($scope, $http){


	$scope.username = $scope.username;
	$scope.password = $scope.password;
	$scope.repeatpassword = $scope.repeatpassword;
	$scope.user = {};
	$scope.urlToPost = 'localhost:9001/login';
	
    $scope.submitSignUpForm = function() {
    
    var formpost= {
    	      method  : 'POST',
    	      url     : '/signup',
    	      data    : $scope.user,
    	      headers : {'Content-Type': 'application/x-www-form-urlencoded'} 
    };
    var formjson = JSON.stringify($scope.user);
    
        console.log("posting data....");
        $http.post('/signup', formjson, {headers: {'Content-Type': 'application/json'} })
        	.success(function(data, status, headers, config){
        		$window.alert('me registre');
                console.log(data);
        })
        	.error(function (data, status, headers, config){
        		$window.alert('No pude registrarme');
	  		});
        };
    });
});
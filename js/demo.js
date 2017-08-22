var myApp = angular.module('myApp',[]);

myApp.controller('GreetingController', ['$scope', function($scope) {
  $scope.x='';
  $scope.y='';
  $scope.mul = function(){
	  $scope.z= $scope.x * $scope.y;
	 }
	 $scope.add = function(){
		 $scope.z=$scope.x + $scope.y;
	 }
   }]);
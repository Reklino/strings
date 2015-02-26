var App = angular.module('App', []);

App.controller('MainController', function($scope, $http) {

	$http.get('bower_components/string-icons/selection.json')
		.then(function(res){
			$scope.selection = res.data;                
		});



});
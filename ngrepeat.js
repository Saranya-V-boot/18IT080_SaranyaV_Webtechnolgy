(function(){

    'use strict';



var app = angular.module('DemoApp',[]);
	app.controller('DemoController', function($scope){

	$scope.TopicNames =[
		{name: "What controller do from Angular's perspective"},
		{name: "Ng repeat concept"},
		{name: "custom services"},
		{name: "custom filters"},
		{name: "Controller Methods"},{name: "Factory concept"},
		{name: "Building a basic controller"}];	
		});
		
		
})();


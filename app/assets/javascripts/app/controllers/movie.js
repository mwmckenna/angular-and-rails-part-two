angular.module('raffler.controllers')
	.controller('MovieController', [
	"$scope",
	"$routeParams",
	"$sce",
	function($scope, $routeParams, $sce) {
	
	  $scope.youtubeUrl = $sce.trustAsResourceUrl("http://www.youtube.com/embed/" + $routeParams.movie_id + "?rel=0"); 		
	
	}
]);		

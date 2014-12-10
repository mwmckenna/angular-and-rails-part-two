// This needs to happen first!

// Create name spaces for all modules
angular.module('raffler.controllers',[]);
angular.module('raffler.factories',[]);
angular.module('raffler.directives',[]);


// And inject in app module
var app = angular.module("raffler", [
	"rails",
	'raffler.controllers',
	'raffler.factories',
  'raffler.directives',
	'ngRoute'
]);

app.config(function($routeProvider, $locationProvider) {
	$locationProvider.html5Mode({
	  enabled: true,
    requireBase:false
	});

  $routeProvider
  	.when('/',
      {
        templateUrl: '/templates/index.html',
        controller: 'RaffleController'
      })
    .when('/movie/:movie_id',
      {
        templateUrl: '/templates/movie.html',
        controller: 'MovieController'
      })
    .when('/movies',
      {
        controller: 'MoviesController',
        templateUrl: '/templates/movies.html'
      })
    .otherwise({redirectTo: '/'});
});



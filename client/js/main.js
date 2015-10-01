//Use to instantiate app, connect factory & controllers and configure app.

var app = angular.module('myBlog', ['ngRoute', 'myBlog.controllers', 'myBlog.factories']);

app.config(['$routeProvider', function($routeProvider) {
	$routeProvider
	.when('/', {
		templateUrl: '../views/blogposts.html',
		controller: 'PostListController'
	})
	.when('/newpost', {
		templateUrl:'../views/newpost.html',
		controller: 'ComposePostController'
	})
	.otherwise({
		redirectTo:'/'
	})
	
}]);
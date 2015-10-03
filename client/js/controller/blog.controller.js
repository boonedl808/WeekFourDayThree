//Logic for page actions here. 

var app = angular.module('myBlog.controllers', []);

app.controller('PostListController', ['$scope', 'Blog', function($scope, Blog) {
	$scope.posts = [];
	Blog.getItems().then(function(serverPosts) {
		$scope.posts.unshift(serverPosts);
	});
}]);

app.controller('ComposePostController', ['$scope', 'Blog', function($scope, Blog) {
	var blogPost = {
		title: $scope.note.title,
		body: $scope.note.body,
		author: $scope.note.author,
	};
	Blog.postItem(blogPost);
}]);

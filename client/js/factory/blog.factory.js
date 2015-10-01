//The action to call the parse service should be here.

var app = angular.module('myBlog.factories', []);
app.factory('Blog', ['$http', function($http) {
    var ParseFactory = {};
    ParseFactory.getItems = function() {
    
        return $http.get('https://api.parse.com/1/classes/BlogPosts', { 
            headers: { 
                'X-Parse-Application-Id':'JoI14Sd9qkOQ0PkcvgiKZ170eqVpB2sWCe4JIX2Y',
                'X-Parse-REST-API-Key':'Ojcju0EWGiOm8w74T295Y603qby63X6BQsvGCj2E'
            }
            })
            .then(function(response) {
                // transform the promise of response into a promise of data
                return response.data;
            });
    };
    
    ParseFactory.postItem = function(item) {
    
        return $http.post('https://api.parse.com/1/classes/BlogPosts', item, { 
            headers: { 
                'X-Parse-Application-Id':'JoI14Sd9qkOQ0PkcvgiKZ170eqVpB2sWCe4JIX2Y',
                'X-Parse-REST-API-Key':'Ojcju0EWGiOm8w74T295Y603qby63X6BQsvGCj2E'
            }
            })
            .then(function(response) {
                // transform the promise of response into a promise of data
                return response.data;
            });
    };
    return ParseFactory;
}]);
// app.factory('Blog',['$http','PARSE_CREDENTIALS',function($http,PARSE_CREDENTIALS){
// var baseUrl = 'https://api.parse.com/1/classes/BlogPosts';
// return {
//     provider:function(type) {
//         return {
//             getAll:function(){
//                 return $http.get(getUrl(type),getParams());
//             },
//             get:function(id){
//                 return $http.get(getUrl(type)+id,getParams());
//             },
//             create:function(data){
//                 return $http.post(getUrl(type),data,getParams());
//             },
//             edit:function(id,data){
//                 return $http.put(getUrl(type)+id,data,getParams());
//             },
//             delete:function(id){
//                 return $http.delete(getUrl(type)+id,getParams());
//             }
//         }
//         function getUrl(type) {
//             return baseUrl+type;
//         }

//         function getParams() {
//             return {
//                     headers:{
//                         'X-Parse-Application-Id': 'JoI14Sd9qkOQ0PkcvgiKZ170eqVpB2sWCe4JIX2Y',
//                         'X-Parse-REST-API-Key':'Ojcju0EWGiOm8w74T295Y603qby63X6BQsvGCj2E',
//                         'Content-Type':'application/json'
//                  }      
//             }    
//         }

//     }
//  }
// }])



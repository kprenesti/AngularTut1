'use strict';

// Declare app level module which depends on views, and components
angular.module('bogusPocus', [
  'ui.router',
  'bogusPocus.about',
  'bogusPocus.store'
])

.config(['$urlRouterProvider', function($urlRouterProvider) {
  $urlRouterProvider.otherwise('/');
}])

.factory('bookListFactory', ['$http', function($http){
  var bookListFactory ={
    getBookList: function() {
      return $http(
      {
        url: "components/books.json",
        method: "GET",
      })
      .then(function (response) {
        return response.data;
        });
      }
    };
    console.log(bookListFactory);
    return bookListFactory;

    }]);

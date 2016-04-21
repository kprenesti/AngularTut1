angular.module('bogusPocus.store', ['ngRoute'])
.config(['$routeProvider', function($routeProvider){
  $routeProvider
  .when('/store', {
    templateUrl: 'store/store.html',
    controller: 'StoreController'
  });
}])
.controller('StoreController', ['$scope', '$http', function($scope, $http){
  $http.get('components/books.json')
  .then(function(response){
    $scope.books = response.data;
  });
}]);

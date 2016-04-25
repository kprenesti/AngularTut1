angular.module('bogusPocus.store', ['ngRoute'])
.config(['$routeProvider', function($routeProvider){
  $routeProvider
  .when('/store', {
    templateUrl: 'store/store.html',
    controller: 'StoreController'
  })
  .when('/store/:id', {
    templateUrl: 'store/details.html',
    controller: 'BookDetailsController'
  });
}])
.controller('StoreController', ['$scope', '$http', function($scope, $http){
  var vm = $scope;
  $http.get('components/books.json')
  .then(function(response){
    vm.books = response.data;
  });
}])
.controller('BookDetailsController', ['$scope', '$http', '$routeParams','$filter', function($scope, $http, $routeParams, $filter){
  console.log($routeParams);
  var vm = $scope;
  $http.get('components/books.json')
  .then(function(response){
    vm.book = response.data[$routeParams.id];
    console.log(response.data[$routeParams.id]);
  }); //end then
}]);

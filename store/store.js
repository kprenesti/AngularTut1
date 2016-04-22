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
  $http.get('components/books.json')
  .then(function(response){
    $scope.books = response.data;
  });
}])
.controller('BookDetailsController', ['$scope', '$http', '$routeParams','$filter', function($scope, $http, $routeParams, $filter){
  // console.log($routeParams);
  var bookID = $routeParams.book.id;
  console.log(bookID);
  $http.get('components/books.json' + $routeParams.id)
  .then(function(response){
    $scope.book = $filter('filter')(response.data, function(d){
      return d.id == bookID;
    }); //end $scope.book
  });
}]);

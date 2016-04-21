angular.module('bogusPocus.store', ['ngRoute'])
.config(['$routeProvider', function($routeProvider){
  $routeProvider
  .when('/store', {
    templateUrl: 'store/store.html',
    controller: 'StoreController'
  });
}])
.controller('StoreController', ['$scope', function($scope){

}]);

angular.module('bogusPocus.store', ['ui.router'])
.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){
  $stateProvider
  .state('storeHome', {
    url: '/',
    templateUrl: 'store/store.html',
    controller: 'StoreController',
    controllerAs: 'StoreCtrl'
  }) //end state (chained)
  .state('bookDetails', {
    url: '/:id',
    templateUrl: 'store/details.html',
    controller: 'StoreDetailsController',
    controllerAs: 'DetailsCtrl'
  }); //end state
}]) //end config (chained)
.controller('StoreController', ['$scope', 'bookListFactory', function($scope, bookListFactory){
  // var vm = this;
  var promise = bookListFactory.getBookList();
  promise.then(function(data){
    $scope.books = data;
    console.log($scope.books);
  })

}])
.controller('StoreDetailsController', ['$scope', 'bookListFactory', '$stateParams', function($scope, bookListFactory, $stateParams){
  var id = $stateParams.id;
  var promise = bookListFactory.getBookList();
  promise.then(function(data){
    $scope.books = data;
  }).then(function(){ //end promise.then
  for(var i=0; i<$scope.books.length; i++){
    if($scope.books[i].id == id){
      $scope.book = $scope.books[i];
    }
  }});
}]);

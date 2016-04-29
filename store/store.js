angular.module('bogusPocus.store', ['ui.router'])
.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){
  $stateProvider
  .state('storeHome', {
    url: '/',
    templateUrl: 'store/store.html',
    controller: 'StoreController',
    controllerAs: 'StoreCtrl'
  })
  .state('storeHome.details', {
    url: ':Id',
    templateUrl: 'store/details.html',
    controller: 'BookDetailsController',
    controllerAs: 'DetailsCtrl'
  });
}])
.controller('StoreController', ['$scope', '$http', function($scope, $http){
  var vm = this;
  $http.get('components/books.json')
  .then(function(response){
    vm.books = response.data;
  });
}])
.controller('BookDetailsController', ['$scope', '$stateParams', '$http', function($scope, $stateParams, $http){
  console.log($stateParams);
  var vm = this;
   $http({
     url: "components/books.json",
     method: "GET",
   })
    .then(function (response) {
      vm.books = response.data;
      console.log($scope.books);
  }); //end then



//   function findItem(id){
//   var targetItem = null;
//   $scope.books.forEach(function(book){
//     console.log("Test",book.id,id,book.id === id);
//     if (book.id === id) targetItem = book;
//   });
//   return targetItem;
// }
//
// // You never actually call this function
// function list($scope, $stateParams) {
//   //assigns book to the integer returned by $stateParams.Id
//   vm.book = findItem(parseInt($stateParams.Id));
//   //Copy all of the properties of friend onto scope
//   angular.extend($scope, book);
// }
//
// if ($stateParams.Id) {
//   list($scope, $stateParams);
//   console.log($scope);
// }
}]);

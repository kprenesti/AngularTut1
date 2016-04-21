angular.module('bogusPocus.store', ['ngRoute'])
.config(['$routeProvider', function($routeProvider){
  $routeProvider
  .when('/store', {
    templateUrl: 'store/store.html',
    controller: 'StoreController'
  });
}])
.controller('StoreController', ['$scope', function($scope){
  $scope.books = [
    {
      "image": "img/lunaHatMaking101.jpg",
      "alt": "Luna with a lion hat",
      "title": "DIY Magic Hat Making 101",
      "author": "Luna Lovegood",
      "price": 20
    },
    {
      "image": "img/thinkingHat.jpg",
      "alt": "Harry Potter arguing with the Sorting Hat",
      "title": "Out-Thinking a Thinking Hat",
      "author": "Harry Potter",
      "price": 11
    },
    {
      "image": "img/42.jpg",
      "alt": "The Answer to Life the Universe and Everything",
      "title": "The Answer to Life the Universe and Everything",
      "author": "Galaxy Hitchhiker",
      "price": 42
    },
    {
      "image": "img/hocusPocusMakeup.jpg",
      "alt": "Witches from Hocus Pocus",
      "title": "Spellbinding Beauty: The Definitive Guide",
      "author": "Witches",
      "price": 14
    },
    {
      "image": "img/ghostglass.jpg",
      "alt": "Ghostly hand on glass",
      "title": "Hello From the Other Side",
      "author": "Not Adele",
      "price": 24
    },
    {
      "image": "img/AncientMagic.jpg",
      "alt": "Ancient Magic",
      "title": "Vintage Magic",
      "author": "Old Dead People Society",
      "price": 60
    },
  ];
}]);

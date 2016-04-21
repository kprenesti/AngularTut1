'use strict';

angular.module('bogusPocus.about', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/about', {
    templateUrl: 'about/about.html',
    controller: 'AboutController'
  });
}])

.controller('AboutController', ['$scope', function($scope) {

}]);

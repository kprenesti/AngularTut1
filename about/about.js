'use strict';

angular.module('bogusPocus.about', ['ui.router'])

.config(['$stateProvider', function($stateProvider) {
  $stateProvider.state('about', {
    url: '/about',
    templateUrl: 'about/about.html',
    controller: 'AboutController',
    controllerAs: 'AboutCtrl'
  });
}])

.controller('AboutController', ['$scope', function($scope) {

}]);

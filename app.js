'use strict';

// Declare app level module which depends on views, and components
angular.module('bogusPocus', [
  'ngRoute',
  'bogusPocus.about',
  'bogusPocus.store'
])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/store'});
}]);

'use strict';

// Declare app level module which depends on views, and components
angular.module('bogusPocus', [
  'ui.router',
  'bogusPocus.about',
  'bogusPocus.store'
])

.config(['$urlRouterProvider', function($urlRouterProvider) {
  $urlRouterProvider.otherwise('/');
}]);

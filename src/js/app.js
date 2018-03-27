angular.module('GodownManagementSystem', [
    'ngRoute',
    'mobile-angular-ui',
    'GodownManagementSystem.controllers.Main'
  ])
  
  .config(function($routeProvider) {
    $routeProvider.when('/', {templateUrl:'home.html',  reloadOnSearch: false});
  });
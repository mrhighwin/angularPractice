'use strict';

angular.module('angularFullStackTestSetupApp', [
  'angularFullStackTestSetupApp.auth',
  'angularFullStackTestSetupApp.admin',
  'angularFullStackTestSetupApp.constants',
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'btford.socket-io',
  'ui.router',
  'ui.bootstrap',
  'validation.match'
])
  .config(function($urlRouterProvider, $locationProvider) {
    $urlRouterProvider
      .otherwise('/');

    $locationProvider.html5Mode(true);
  });

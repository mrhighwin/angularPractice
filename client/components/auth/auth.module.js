'use strict';

angular.module('angularFullStackTestSetupApp.auth', [
  'angularFullStackTestSetupApp.constants',
  'angularFullStackTestSetupApp.util',
  'ngCookies',
  'ui.router'
])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });

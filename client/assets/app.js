var app = angular.module('app', ['ngRoute', 'ngCookies']);
    /* configuration for angular route */
    app.config(function($routeProvider) {
      $routeProvider
        .when('/', {
          templateUrl: '/partials/login.html',
          controller: 'usersController'
        })
        .when('/dashboard', {
          templateUrl: '/partials/dashboard.html',
          controller: 'itemsController',
        })
        .when('/user/:id', {
          templateUrl: '/partials/user.html',
          controller: 'showUsersController',
        })
        // .when('/user/:id', {
        //   templateUrl: '/partials/user.html',
        //   controller: 'usersController',
        // })
        .otherwise({
          redirectTo: '/'
        });
    });

// App Module
var app = angular.module('gridgameApp', [
  'ui.router',
  'ngMaterial'
]);


// routing
app.config(function($stateProvider, $urlRouterProvider, $locationProvider) {

  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'pages/home/home.html',
      controller: 'HomeCtrl'
    })
    .state('game', {
      url: '/game',
      templateUrl: 'pages/game/game.html',
      controller: 'GameCtrl'
    });

    $urlRouterProvider.otherwise('/');

    $locationProvider.html5Mode(true);

});


app.run(['$rootScope', '$location',
  function ($rootScope, $location) {

    $rootScope.$on('$routeChangeStart', function (event, next) {

    });

  }]);


var app = angular.module('gridgameApp');


app.controller('HomeCtrl', ['$scope',
    function($scope) {
      $scope.title = 'Grid Game'.split('');
    }
  ]);

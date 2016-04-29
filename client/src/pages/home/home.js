
var app = angular.module('gridgameApp');


app.controller('HomeCtrl', ['$scope',
    function($scope) {
      $scope.title = 'Conway\'s Game of Life'.split('');
    }
  ]);

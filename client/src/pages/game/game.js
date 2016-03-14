
var app = angular.module('gridgameApp');


app.controller('GameCtrl', ['$scope', '$interval', 'GameOptionsService', 'GameModelService',
    function($scope, $interval, GameOptionsService, GameModelService) {

      $scope.options = GameOptionsService;
      $scope.grid = GameModelService.grid;


      $scope.gameStyle = {
        'width': $scope.options.gridSize * $scope.options.squareSize,
        'height': $scope.options.gridSize * $scope.options.squareSize
      };

    }
  ]);

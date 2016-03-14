
var app = angular.module('gridgameApp');


app.controller('GameCtrl', ['$scope', '$interval',
    function($scope, $interval) {

      // helpers
      var randInt = function(min, max) {
        return Math.floor((Math.random() * max) + min);
      };

      var grid = [];
      $scope.options = {
        gridSize: 100,
        squareSize: 6
      };

      $scope.gameStyle = {
        'width': $scope.options.gridSize * $scope.options.squareSize,
        'height': $scope.options.gridSize * $scope.options.squareSize
      };


      for(var i = 0; i < $scope.options.gridSize; i++) {
        for(var j = 0; j < $scope.options.gridSize; j++) {
          grid.push({
            x: j,
            y: i,
            color: 'black'
          });
        }
      }

      $scope.grid = grid;

      $interval(function() {
        var randGridIndex = randInt(0, $scope.grid.length);
        $scope.grid[randGridIndex].color = 'yellow';
      }, 1);

    }
  ]);

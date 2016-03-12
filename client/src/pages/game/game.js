
var app = angular.module('gridgameApp');


app.controller('GameCtrl', ['$scope',
    function($scope) {

      var grid = [];
      var options = {
        size: 60
      };

      for(var i = 0; i < options.size; i++) {
        grid.push([]);
      }

      grid.forEach(function(item, index) {
        for(var i = 0; i < options.size; i++) {
          item.push({
            x: i,
            y: index
          });
        }
      });

      $scope.grid = grid;

    }
  ]);

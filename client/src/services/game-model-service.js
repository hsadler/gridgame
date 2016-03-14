
var app = angular.module('gridgameApp');


app.factory('GameModelService', ['$interval', 'GameOptionsService',
    function($interval, GameOptionsService) {

      // helpers
      var randInt = function(min, max) {
        return Math.floor((Math.random() * max) + min);
      };

      var service = {
        grid: []
      };

      var options = GameOptionsService;

      for(var i = 0; i < options.gridSize; i++) {
        for(var j = 0; j < options.gridSize; j++) {
          service.grid.push({
            x: j,
            y: i,
            color: 'black'
          });
        }
      }

      $interval(function() {
        var randGridIndex = randInt(0, service.grid.length);
        service.grid[randGridIndex].color = 'yellow';
      }, 100);

      return service;
    }
  ]);

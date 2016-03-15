
var app = angular.module('gridgameApp');


app.factory('GameModelService', ['$interval', '$timeout', 'GameOptionsService', 'GameSquareConstructor',
    function($interval, $timeout, GameOptionsService, GameSquareConstructor) {

      // helpers
      var randInt = function(min, max) {
        return Math.floor((Math.random() * max) + min);
      };


      var options = GameOptionsService;

      var service = {
        grid: {}
      };

      // construct the game grid hash
      for(var i = 0; i < options.gridSize; i++) {
        for(var j = 0; j < options.gridSize; j++) {
          service.grid[j + 'x' + i + 'y'] = new GameSquareConstructor(j, i, false);
        }
      }

      console.log(service.grid);

      // for grid play
      // $interval(function() {
      //   var randX = randInt(0, options.gridSize);
      //   var randY = randInt(0, options.gridSize);
      //   var square = service.grid[randX + 'x' + randY + 'y'];
      //   square.alive = !square.alive;
      // }, 100);


      //testing
      // var square = service.grid['14x14y'];
      // square.modifyNeighbors(service.grid, function(neigh) {
      //   neigh.alive = !neigh.alive;
      // });

      service.grid['15x15y'].alive = true;

      $interval(function() {

        var currSq;
        for(var loc in service.grid) {
          currSq = service.grid[loc];
          if(currSq.alive) {
            currSq.modifyNeighbors(service.grid, function(neigh) {
              neigh.alive = !neigh.alive;
            });
          }
        }

      }, 200);


      return service;
    }
  ]);







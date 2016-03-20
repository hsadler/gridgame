
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

      // set game rules
      var secludedOverpopulatedDies = function(sq, neighbors, update) {
        if(sq.alive) {
          var neighborsAlive = 0;
          neighbors.forEach(function(n) {
            if(n.alive) {
              neighborsAlive++;
            }
          });
          if(neighborsAlive < 2 || neighborsAlive > 3) {
            update(sq);
          }
        }
      };

      var justRightReproduces = function(sq, neighbors, update) {
        if(!sq.alive) {
          var neighborsAlive = 0;
          neighbors.forEach(function(n) {
            if(n.alive) {
              neighborsAlive++;
            }
          });
          if(neighborsAlive === 3) {
            update(sq);
          }
        }
      };

      var rules = [secludedOverpopulatedDies, justRightReproduces];


      // set squares as alive
      for(var loc in service.grid) {
        if(Math.random() > 0.5) {
          service.grid[loc].alive = true;
        }
      }


      // run game
      $interval(function() {

        var currSq;
        var toUpdate = [];

        for(var loc in service.grid) {
          currSq = service.grid[loc];
          currSq.processNeighbors(service.grid, function(neighbors) {

            // process rules
            rules.forEach(function(rule) {
              rule(currSq, neighbors, function(sq) {
                toUpdate.push(sq);
              });
            });

          });
        }

        toUpdate.forEach(function(sq) {
          sq.alive = !sq.alive;
        });

      }, options.speed);


      return service;
    }
  ]);







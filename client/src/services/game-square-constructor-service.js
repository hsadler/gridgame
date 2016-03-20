
var app = angular.module('gridgameApp');


app.factory('GameSquareConstructor', [
    function() {

      var GameSquare = function(xPos, yPos, alive) {
        this.x = xPos;
        this.y = yPos;
        this.alive = alive;
      };

      var neighborDict = {
        'N': [0, -1],
        'NE': [1, -1],
        'E': [1, 0],
        'SE': [1, 1],
        'S': [0, 1],
        'SW': [-1, 1],
        'W': [-1, 0],
        'NW': [-1, -1]
      };

      GameSquare.prototype.getNeighbor = function(nDirection, gameGrid) {
        var nMod = neighborDict[nDirection];
        var nHash = (this.x + nMod[0]) + 'x' + (this.y + nMod[1]) + 'y';
        return gameGrid[nHash] || null;
      };

      GameSquare.prototype.processNeighbors = function(gameGrid, cb) {
        var neighbors = [];
        for(var direction in neighborDict) {
          var neighbor = this.getNeighbor(direction, gameGrid);
          if(neighbor) {
            neighbors.push(neighbor);
          }
        }
        cb(neighbors);
      };

      return GameSquare;

    }
  ]);

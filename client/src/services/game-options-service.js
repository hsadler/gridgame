
var app = angular.module('gridgameApp');


app.factory('GameOptionsService', [
    function() {

      var service = {
        gridSize: 75,
        squareSize: 8,
        speed: 100,
        ratioAlive: 0.5
      };

      return service;
    }
  ]);

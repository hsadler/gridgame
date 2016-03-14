
var app = angular.module('gridgameApp');


app.factory('GameOptionsService', [
    function() {

      var service = {
        gridSize: 100,
        squareSize: 6
      };

      return service;
    }
  ]);

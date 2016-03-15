
var app = angular.module('gridgameApp');


app.factory('GameOptionsService', [
    function() {

      var service = {
        gridSize: 31,
        squareSize: 20
      };

      return service;
    }
  ]);

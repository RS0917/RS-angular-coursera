(function () {
  'use strict';
  angular.module('LunchApp', [])
  .controller('LunchController', LunchController);

  LunchController.$inject = ['$scope'];

  function LunchController($scope){
    $scope.dishes="";
    $scope.checkNoDishes = function () {
      var dish_array = $scope.dishes.split(",");
      console.log(dish_array);
    };
  };
}) ();

//"Enjoy!"
//"Too much!"
//Please enter data first
//empty item, i.e., , , NOT considered as an item towards the count.

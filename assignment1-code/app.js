(function () {
  'use strict';
  angular.module('LunchApp', [])
  .controller('LunchController', LunchController);

  LunchController.$inject = ['$scope'];

  function LunchController($scope){
    $scope.dishes="";
    $scope.message="";
    $scope.borderstyle="none";

    $scope.checkNoDishes = function () {
      var dishes_arr = $scope.dishes.replace(/ /g,'').split(",");
      dishes_arr = dishes_arr.filter(el => {
        return el != null && el != '';
      });
      var no_of_dishes = dishes_arr.length;
      $scope.message = printMessage(no_of_dishes);
    };

    var printMessage = function (no_of_dishes) {
      $scope.borderstyle="solid";
      if(no_of_dishes==0){
        $scope.msgcolor="red";
        return "Please enter data first";
      }
      else{
        $scope.msgcolor="green";
        if(no_of_dishes>=1 && no_of_dishes<=3)
          return "Enjoy!";
        else if(no_of_dishes>3)
          return "Too much!";
      }
      return "";
    };

    $scope.clearFields = function () {
      $scope.dishes="";
      $scope.message="";
      $scope.borderstyle="none";
    };

  };
}) ();

//"Enjoy!"
//"Too much!"
//Please enter data first
//empty item, i.e., , , NOT considered as an item towards the count.

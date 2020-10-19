(function() {
  'use strict';

  angular.module('ShoppingListCheckOff', [])
  .controller('ToBuyController', ToBuyController)
  .controller('AlreadyBoughtController', AlreadyBoughtController)
  .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

  ToBuyController.$inject = ['ShoppingListCheckOffService'];
    function ToBuyController(ShoppingListCheckOffService){
    var tobuy = this;
    tobuy.items = ShoppingListCheckOffService.getToBuyItems();
    tobuy.boughtItem = function (itemIndex) {
      ShoppingListCheckOffService.boughtItem(itemIndex);
    }
  }

  AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
  function AlreadyBoughtController(ShoppingListCheckOffService){
    var bought = this;
    bought.items = ShoppingListCheckOffService.getBoughtItems();
  }

  function ShoppingListCheckOffService() {
    var service = this;
    // List of shopping items
    var itemsbought = [];
    var items = [{ name: "cookies", quantity: 10},
                   { name: "cakes", quantity: 10},
                   { name: "pancakes", quantity: 10},
                   { name: "chips", quantity: 10},
                   { name: "candies", quantity: 10},
                   { name: "biscuits", quantity: 10}];

    service.boughtItem = function (itemIndex) {
      var item = items[itemIndex];
      itemsbought.push(item);
      items.splice(itemIndex, 1);
    };

    service.getToBuyItems = function () {
      return items;
    };

    service.getBoughtItems = function () {
      return itemsbought;
    };
  }

})();

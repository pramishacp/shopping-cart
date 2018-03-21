var app = angular.module('myApp', []);

app.controller('myCtrl', function($scope) {
  
  // products
  $scope.items = [
    {
      id: 1,
      name: 'iPhone 6s',
      price: 2500,
      discount:0,

      checked: false
    },
    {
      id: 2,
      name: 'television',
      price: 8950,
      discount:10,
      checked: false

    },
    {
      id: 3,
      name: 'Macbook Pro',
      price: 4000,
      discount:10,
      checked: false
    },
    {
      id: 4,
      name: 'T-shirt',
      price: 20,
      discount:10,
      checked: false 
    },
    {
      id: 5,
      name: 'C# Book',
      price: 10,
      discount:10,
      checked: false
    },
    {
      id: 6,
      name: 'Notebook',
      price: 6980,
      discount:10,
      checked: false 
    }
  ];
  
  //my shopping cart
  $scope.myItems = [];
  // add to cart
  $scope.addItem = function(newItem) {
    console.log("newItem",newItem);
    if($scope.myItems.length == 0) {
      console.log("$scope.myItems",$scope.myItems.length);
      newItem.count = 1;
      $scope.myItems.push(newItem);
     }
    else {
      var repeat = false;
      console.log("b,repeat")
      for( var i = 0; i < $scope.myItems.length; i++ ) {
        console.log("lenght",$scope.myItems.length);
        if($scope.myItems[i].id == newItem.id) {
          console.log("$scope.myItems[i].id",$scope.myItems[i].id);
          console.log("newItem.id",newItem.id);
          $scope.myItems[i].count++;
          console.log("jh",$scope.myItems[i].count);
          repeat = true;
          console.log("a",repeat);
          
        }
      }
      if(!repeat) {
        newItem.count = 1;
        console.log("newItem",newItem);
        $scope.myItems.push(newItem);
      }
    }
    updatePrice();
  };

    $scope.add = function(newItem) {
     console.log("newItem",newItem);
    
    updatePrice();
  };

 
  // (totalPrice) - update price
  var updatePrice = function() {
   
    var totalPrice = 0;
    
    
    for( var i = 0; i < $scope.myItems.length; i++ ) {
    
      totalPrice = totalPrice +(($scope.myItems[i].count * $scope.myItems[i].price) * (1 - $scope.myItems[i].discount/100));
      
    } 
    $scope.totalPrice = totalPrice;
    
  };


  
  // empty your cart
  $scope.removeBasket = function() {
    $scope.myItems.splice(0, $scope.myItems.length);
    updatePrice();
  };


   $scope.removeItem = function(index) {
     console.log()
        $scope.myItems.splice(index, 1);
        updatePrice();
    };
  
});

app.filter('reverse', function() {
  return function(items) {
    var x = items.slice();
    if( items.length > 1 ) {
      angular.element('#ok tr').css('background','#fff');
      angular.element('#ok tr').filter(':first').css('background','lightyellow');
      setTimeout(function() {
        angular.element('#ok tr') .filter(':first').css('background','#fff');
      }, 500);
    }
    return x;
  };
});
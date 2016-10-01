


console.log("itemsController loaded");

app.controller('itemsController', ['$scope','itemFactory', '$location', '$cookies', function($scope, itemFactory, $location, $cookies) {


var index = function(){
                      // console.log("index itemsController");
                        itemFactory.index(function(returnedData){
                          // console.log("back to index");
                          $scope.users = returnedData;
                          // console.log($scope.items);
                        });

                        myUsername = $cookies.get('user');

                        itemFactory.getMyItems(myUsername, function(returnedData){
                          // console.log("MY Items")
                          $scope.items = returnedData;
                          // console.log($scope.items);
                        })
            };
index();


var authenticated = function(){
      console.log("cookies");
      var cookie = $cookies.get('user');

      if(cookie != null){

      } else {
        $location.url('/');
      }

      console.log(cookie);

    }

authenticated();





var answer_index = function(){
                      console.log("answer_index itemsController");
                        itemFactory.show(id, function(returnedData){
                          $scope.showItem = returnedData.data[0];                        
                        })
            };

var showItemID = {};


$scope.home = function(){
        $location.url('/dashboard');
      }

$scope.logout = function(){

        $cookies.remove('user');

        $location.url('/');
      }


  $scope.add = function(){
    console.log("in item add function");
    // console.log($scope.addItem);
    // console.log($scope.addItem.category);
    var user = $cookies.get('user');
    $scope.addItem.user = user;
    itemFactory.addIt($scope.addItem, function(returnedData){
      // console.log("in callback");
      console.log("returnedData");
      console.log(returnedData);
      // index();
    })
    console.log("SECOND ADD")
    itemFactory.tagIt($scope.addItem, function(returnedData){
      console.log("in SECOND ADD callback");
      console.log("returnedData twice");
      console.log(returnedData);
      
    })
    index();
  }


  $scope.checkboxClick = function(value){
    console.log("click");
    console.log(value);
    itemFactory.checkbox(value, function(returnedData){
      console.log("in checkbox callback");
      console.log("returnedData checkbox");
      console.log(returnedData);
      
    })
  }



  $scope.showUser = function(username, $idx){
    console.log(username);

    itemFactory.show(username, function(){
      console.log("in showUser callback");
      console.log("showUser");
    })
    $location.url('/user/' + $idx);

    // itemFactory.show(id, function(){
    //   console.log("in showItem callback");
    //   console.log("showItem");
    // })
    // $location.url('/item/' + $idx);
  }


}]);
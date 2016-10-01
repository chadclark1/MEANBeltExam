


console.log("showUsersController loaded");

app.controller('showUsersController', ['$scope','itemFactory', '$location', '$cookies', function($scope, itemFactory, $location, $cookies) {


    var index = function(){
                          // console.log("index itemsController");
                            itemFactory.getUserItems(function(returnedData, username){
                              // console.log("back to index");
                              $scope.items = returnedData;
                              $scope.thisUsername = username;
                              // console.log($scope.items);
                            });

                            // myUsername = $cookies.get('user');

                            // itemFactory.getMyItems(myUsername, function(returnedData){
                            //   // console.log("MY Items")
                            //   $scope.items = returnedData;
                            //   // console.log($scope.items);
                            // })
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



     $scope.showUser = function(id, $idx){
        console.log(id);

        itemFactory.show(id, function(){
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

      $scope.home = function(){
        $location.url('/dashboard');
      }

      $scope.logout = function(){

        $cookies.remove('user');

        $location.url('/');
      }





  }]);
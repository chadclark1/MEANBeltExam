


console.log("usersController loaded");

app.controller('usersController', ['$scope','userFactory', '$location', '$cookies', function($scope, userFactory, $location, $cookies) {


// var index = function(){
                    
//                         userFactory.index(function(returnedData){
//                           // console.log("back to index");
//                           $scope.users = returnedData;
//                           // console.log($scope.customers);
//                         });
//             };
// index();





  $scope.login = function(){
     
    console.log($scope.user);
    
    userFactory.login($scope.user, function(returnedData){
      console.log("back in login function on accounts controller");
      console.log(returnedData);

      if(returnedData.data != true){
              console.log($scope.user.username);

              

              // Setting a cookie
              // $cookies.userName = $scope.user.username;
              // $scope.cookiesUserName = $cookies.userName;
              $cookies.put('user', $scope.user.username);

              $scope.username = $cookies.get('user');

              console.log($scope.username)

              // Retrieving a cookie
              var userCookie = $cookies.get('user');
              console.log(userCookie);

              console.log('logged in');
              // console.log($cookies);
              console.log($scope.username);

              $location.url('/dashboard');
            } else {
              console.log(returnedData);
              $location.url('/');
            }



    //   // $location.url('/wall');
    })
  }















  $scope.add = function(){
    console.log("in user add function");
    console.log($scope.addUser);
    userFactory.add($scope.addUser, function(returnedData){
      console.log(returnedData);
      index();
    })
  }

  $scope.delete = function(id){
    console.log("delete");
    console.log(id)
    userFactory.delete(id, function(){
      console.log("delete callback controller");
      index();
    })
  }

  



}]);
console.log("itemFactory loaded");



app.factory('itemFactory', ['$http', function($http) {
      // The factory is nothing more than a function that returns an object

    function itemFactory(){

      var _this = this;

      var showUserUsername = {};


      this.index = function(callback){
      	// console.log("index itemFactory");
        $http.get('/users').then(function(returned_data){
          users = returned_data.data;
          // console.log(users);
          callback(users)
        })
      }

      this.getItems = function(callback){
        // console.log("getItems itemFactory");
        $http.get('/items').then(function(returned_data){
          items = returned_data.data;
          // console.log(items);
          callback(items)
        })
      }

      this.getMyItems = function(myUsername, callback){
        // console.log("getMyItems itemFactory");
        $http.get('/items/' + myUsername).then(function(returned_data){
          myItems = returned_data.data;
          // console.log(myItems);
          callback(myItems);
        })
      }

      this.getUserItems = function(callback){
        console.log("getMyItems BY ID Factory");
        console.log(showUserUsername)
        userID = showUserUsername.username
        $http.get('/items/' + userID).then(function(returned_data){
          userItems = returned_data.data;
          console.log(userItems);
          callback(userItems, userID);
        })
      }




      this.addIt = function(newItem, callback){
        console.log("hello");
        console.log(newItem);
        $http.post('/items', newItem).then(function(returned_data){
          console.log("posted");
          console.log(returned_data);
          callback(returned_data);
        })
      }

      this.tagIt = function(newItem, callback){
        console.log("tag");
        console.log(newItem);
        $http.post('/tagItems', newItem).then(function(returned_data){
          console.log("tagged");
          console.log(returned_data);
          callback(returned_data);
        })
      }

      this.checkbox = function(value, callback){
        console.log("factory checkbox");
        console.log(value);
        $http.post('/items/checked', value).then(function(returned_data){
          console.log("checked");
          console.log(returned_data);
          callback(returned_data);
        })
      }

      this.show = function(username, callback){
        console.log("show factory");

        showUserUsername = {username: username};

        console.log("showUserUsername")
        console.log(showUserUsername);
        // .then(function(){
        //   console.log("going back to controller");
        //   callback();
        // })
      }

     


    }

    return new itemFactory();
}]);
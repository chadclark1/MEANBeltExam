console.log("userFactory loaded");



app.factory('userFactory', ['$http', function($http) {
      // The factory is nothing more than a function that returns an object

    function userFactory(){

      var _this = this;


      // this.index = function(callback){
      // 	console.log("factory index");
      //   $http.get('/users').then(function(returned_data){
      //     users = returned_data.data;
      //     callback(users)
      //   })
      // }


      this.login = function(userCredentials, callback){
        console.log("factory userCredentials");
        console.log(userCredentials);
        $http.post('/users/login', userCredentials).then(function(returned_data){
            console.log(returned_data.data);
            console.log("register login factory")
            if(returned_data.data == true){
              console.log("already a user")
              callback(returned_data);
            }
            console.log("here")
            if(returned_data != true){
              console.log("siging up")
              console.log(returned_data)
              $http.post('/users/register', userCredentials).then(function(returned_data){
                console.log(returned_data.data);
                callback(true);
              })
            }


            // if (typeof(callback) == 'function'){
            //   callback(returned_data);
            // }
        });
      }















      this.add = function(newUser, callback){
        console.log(newUser);
        $http.post('/users', newUser).then(function(returned_data){
          console.log("posted");
          callback(returned_data);
        })
      }

      this.delete = function(id, callback){
        console.log("delete factory");
        $http.delete('/users/' + id).then(function(){
          console.log("deleted");
          callback();
        })
      }


    }

    return new userFactory();
}]);
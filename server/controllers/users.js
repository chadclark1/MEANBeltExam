console.log("Users controller loaded");


var mongoose = require('mongoose');
var User = mongoose.model('User');


function UsersController(){


  this.index = function(req,res){
    console.log(req.body);
    User.find({}, function(err, results){
      if(err) {console.log(err);}
      res.json(results);
    })
  };


  this.register = function(req,res){
    console.log(req.body);
    User.create({ 
        username: req.body.username,
          }, function(err, results){
        // console.log("in FriendsController this.index, Friend.find");
        // console.log(results);
        if(err) {console.log(err);}
        // res.json(results);
        res.json({err});
      })
      
    };


  this.login = function(req,res){
    console.log(req.body.username);
    User.find({username: req.body.username}, function(err, results){
      console.log(err);
      // if(err){
      //   console.log(err);
      //   res.json({err});
      // } else {       
      //   res.json(true);   
      //  }

      if(results != ''){
        res.json(true);
      } else {
        res.json({err});
      }
      
    })
  };





  // this.addUser = function(req,res){
  //   console.log(req.body);
  //   var TodayDate = new Date();
  //   var day = TodayDate.getDate();
  //   var month = TodayDate.getMonth() + 1;
  //   var year = TodayDate.getFullYear();
  //   console.log(day);
  //   console.log(month);
  //   console.log(year);
  //   User.create({
  //     name: req.body.name,
  //     date: TodayDate,
  //     day: day,
  //     month: month,
  //     year: year,
  //     }, function(err, results){
  //       if(err){
  //         console.log(err);
  //       }
  //       res.json({err});
  //     })
  // }

  // this.delete = function(req,res){
  // //   //your code here
  //   console.log("users controller delete")
  //   console.log(req.params)
  //   User.remove({_id: req.params.id}, function(err, results){
  //     if(err){
  //       console.log(err);
  //     }
  //     res.json({placeholder:'delete'});
  //   })
  // };


  // this.create = function(req,res){
  //   //your code here
  //   res.json({placeholder:'create'});
  // };
  // this.update = function(req,res){
  //   //your code here
  //   res.json({placeholder:'update'});
  // };
  // this.delete = function(req,res){
  //   //your code here
  //   res.json({placeholder:'delete'});
  // };
  // this.show = function(req,res){
  //   //your code here
  //   res.json({placeholder:'show'});
  // };
}



module.exports = new UsersController();
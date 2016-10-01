console.log("Items controller loaded");


var mongoose = require('mongoose');
var Item = mongoose.model('Item');


function ItemsController(){


  this.getItems = function(req,res){
    console.log(req.body);
    Item.find({}, function(err, results){
      
      if(err) {console.log(err);}
      res.json(results);
    })
  };

  this.getUserItems = function(req,res){
    console.log("not id")
    console.log(req.params);
    Item.find({user: req.params.username}, function(err, results){
      
      if(err) {console.log(err);}
      res.json(results);
    })
  };

  this.getUserItemsById = function(req,res){
    console.log("id")
    console.log(req.params.id);
    Item.find({_id: req.params.id}, function(err, results){
      console.log("results");
      console.log(results);
      if(err) {console.log(err);}
      res.json(results);
    })
  };

  this.addItem = function(req,res){
    console.log(req.body);
    var TodayDate = new Date();
    var day = TodayDate.getDate();
    var month = TodayDate.getMonth() + 1;
    var year = TodayDate.getFullYear();
    console.log(day);
    console.log(month);
    console.log(year);
    Item.create({
      user: req.body.user,
      created_by: req.body.user,
      title: req.body.title,
      description: req.body.description,
      userTag: req.body.userTag,
      checked: "",
      date: TodayDate,
      day: day,
      month: month,
      year: year,
      }, 
      function(err, results){
        if(err){
          console.log(err);
        }
        res.json({err});
      })
    // res.json({});
  }

  this.tagItem = function(req,res){
    console.log(req.body);
    var TodayDate = new Date();
    var day = TodayDate.getDate();
    var month = TodayDate.getMonth() + 1;
    var year = TodayDate.getFullYear();
    console.log(day);
    console.log(month);
    console.log(year);
    Item.create({
      user: req.body.userTag,
      created_by: req.body.user,
      title: req.body.title,
      description: req.body.description,
      userTag: req.body.userTag,
      checked: "",
      date: TodayDate,
      day: day,
      month: month,
      year: year,
      }, 
      function(err, results){
        if(err){
          console.log(err);
        }
        res.json({err});
      })
    // res.json({});
  }

  this.checked = function(req,res){
    console.log(req.body);
    Item.update({}, function(err, results){
      
      if(err) {console.log(err);}
      res.json(results);
    })
  };


  this.show = function(req,res){
    console.log(req.params.id);
    var itemID = req.params.id;
    console.log(itemID);
    Item.find({_id: itemID}, function(err, results){
      
      if(err) {console.log(err);}
      res.json(results);
    })
  };


  
}



module.exports = new ItemsController();
console.log('Routes.js: future routes');

var users = require('./../controllers/users.js');
var items = require('./../controllers/items.js');



module.exports = function(app){
	app.get('/users', users.index);
    app.post('/users/login', users.login);
    app.post('/users/register', users.register);
    app.post('/items', items.addItem);
    app.post('/tagItems', items.tagItem);
    app.get('/items', items.getItems);
    app.get('/items/:username', items.getUserItems);
    app.get('/items/id/:id', items.getUserItemsById);
    app.post('/items/checked', items.checked);
    
  
}
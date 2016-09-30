console.log('Routes.js: future routes');

var users = require('./../controllers/users.js');
// var topics = require('./../controllers/topics.js');


// var quotes = require('../controllers/quotes.js')
module.exports = function(app){
    app.post('/users/login', users.login);
    app.post('/users/register', users.register);
    // app.post('/topics', topics.addTopic);
    // app.get('/topics', topics.index);
    // app.get('/topics/:id', topics.show);
  // app.post('/customers', customers.addCustomer);
  // app.get('/customers', customers.index);
  // app.delete('/customers/:id', customers.delete);
  
}
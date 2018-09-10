const express = require('express');
const Router = express.Router();
// const secureRoute = require('../lib/secureRoute');

const drinksController = require('../controllers/drinksController');
const eventsController = require('../controllers/eventsController');
const newsController = require('../controllers/newsController');
const authController = require('../controllers/authController');
const availibleFromController = require('../controllers/availibleFromController');

Router.route('/')
  .get(function(req, res) {
    res.send('Welcome to Express');
  });

// Router.route('/login')
// .post(authController.login);

Router.route('/register')
  .post(authController.register);

Router.route('/drinks')
  .get(drinksController.index)
  .post( drinksController.create);

Router.route('/drinks/:id')
  .get(drinksController.show);
// .put(drinksController.update)
// .delete(drinksController.delete);

Router.route('/drinks/:drinkId/availibleFrom')
  .post(availibleFromController.create);

Router.route('/drinks/:drinkId/availibleFrom/:tagId');
// .put(availibleFromController.update)
// .delete(availibleFromController.delete);

Router.route('/events')
  .get(eventsController.index)
  .post(eventsController.create);
Router.route('/news')
  .get(newsController.index);


module.exports = Router;

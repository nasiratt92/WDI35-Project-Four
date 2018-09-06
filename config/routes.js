const express = require('express');
const Router = express.Router();
const secureRoute = require('../lib/secureRoute');

const filmsController = require('../controllers/filmsController');
const authController = require('../controllers/authController');
const tagsController = require('../controllers/tagsController');

Router.route('/')
  .get(function(req, res) {
    res.send('Welcome to Express');
  });

Router.route('/login')
  .post(authController.login);

Router.route('/register')
  .post(authController.register);

Router.route('/films')
  .get(filmsController.index)
  .post(secureRoute, filmsController.create);

Router.route('/films/:id')
  .get(filmsController.show)
  .put(secureRoute, filmsController.update)
  .delete(secureRoute, filmsController.delete);

Router.route('/films/:filmId/tags')
  .post(tagsController.create);

Router.route('/films/:filmId/tags/:tagId')
  .put(tagsController.update)
  .delete(tagsController.delete);

module.exports = Router;

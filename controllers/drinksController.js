const Drink = require('../models/drink');

function drinksIndex(req, res, next) {
  Drink.find()
    .then(drinks => res.json(drinks))
    .catch(next);
}

function drinksShow(req, res, next) {
  Drink.findById(req.params.id)
    .then(drink => res.json(drink))
    .catch(next);
}

function drinksUpdate(req, res, next) {
  Drink.findById(req.params.id)
    .then(drink => drink.set(req.body))
    .then(drink => drink.save())
    .then(drink => res.json(drink))
    .catch(next);
}

function drinksCreate(req, res, next) {
  console.log('req.body is', req.body);
  Drink.create(req.body)
    .then(drink => res.json(drink))
    .catch(next);
}

function drinksDelete(req, res, next) {
  Drink.findById(req.params.id)
    .then(drink => drink.remove())
    .then(() => res.sendStatus(204)) // NO CONTENT
    .catch(next);
}

module.exports = {
  index: drinksIndex,
  show: drinksShow,
  update: drinksUpdate,
  create: drinksCreate,
  delete: drinksDelete
};

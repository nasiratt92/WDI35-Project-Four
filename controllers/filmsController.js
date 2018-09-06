const Film = require('../models/film');

function filmsIndex(req, res, next) {
  Film.find()
    .then(films => res.json(films))
    .catch(next);
}

function filmsShow(req, res, next) {
  Film.findById(req.params.id)
    .populate('tags.addedBy')
    .then(film => res.json(film))
    .catch(next);
}

function filmsUpdate(req, res, next) {
  Film.findById(req.params.id)
    .then(film => film.set(req.body))
    .then(film => film.save())
    .then(film => res.json(film))
    .catch(next);
}

function filmsCreate(req, res, next) {
  console.log('req.body is', req.body);
  Film.create(req.body)
    .then(film => res.json(film))
    .catch(next);
}

function filmsDelete(req, res, next) {
  Film.findById(req.params.id)
    .then(film => film.remove())
    .then(() => res.sendStatus(204)) // NO CONTENT
    .catch(next);
}

module.exports = {
  index: filmsIndex,
  show: filmsShow,
  update: filmsUpdate,
  create: filmsCreate,
  delete: filmsDelete
};

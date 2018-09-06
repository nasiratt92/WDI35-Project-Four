const Film = require('../models/film');

function tagsCreate(req, res, next) {
  Film.findById(req.params.filmId)
    .then(film => {
      film.tags.push(req.body);
      return film.save();
    })
    .then(film => res.json(film))
    .catch(next);
}

function tagsUpdate(req, res, next) {
  Film.findById(req.params.filmId)
    .then(film => {
      film.tags.id(req.params.tagId).set(req.body);
      return film.save();
    })
    .then(film => res.json(film))
    .catch(next);
}

function tagsDelete(req, res, next) {
  Film.findById(req.params.filmId)
    .then(film => {
      film.tags.id(req.params.tagId).remove();
      return film.save();
    })
    .then(film => res.json(film))
    .catch(next);
}

module.exports = {
  create: tagsCreate,
  delete: tagsDelete,
  update: tagsUpdate
};

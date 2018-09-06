const Drink = require('../models/drink');

function availibleFromCreate(req, res, next) {
  Drink.findById(req.params.drinkId)
    .then(drink => {
      drink.availibleFrom.push(req.body);
      return drink.save();
    })
    .then(drink => res.json(drink))
    .catch(next);
}

// function availibleFromUpdate(req, res, next) {
//   Drink.findById(req.params.drinkId)
//     .then(drink => {
//       drink.availibleFrom.id(req.params.availibleFromId).set(req.body);
//       return drink.save();
//     })
//     .then(drink => res.json(drink))
//     .catch(next);
// }

// function availibleFromDelete(req, res, next) {
//   Drink.findById(req.params.drinkId)
//     .then(drink => {
//       drink.availibleFrom.id(req.params.availibleFromId).remove();
//       return drink.save();
//     })
//     .then(drink => res.json(drink))
//     .catch(next);
// }

module.exports = {
  create: availibleFromCreate
  // delete: availibleFromDelete,
  // update: availibleFromUpdate
};

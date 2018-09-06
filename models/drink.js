const mongoose = require('mongoose');

const drinkSchema = new mongoose.Schema({
  name: {type: String, required: true, unique: true },
  imgUrl: String,
  rating: {type: Number, min: 1, max: 5},
  url: String,
  dateAdded: { type: Date, default: Date.now },
  availibleFrom: [
    {
      lat: {type: Number},
      lon: {type: Number},
      city: {type: String},
      establishmentName: String,
      establishmentImageUrl: String
    }
  ]
});

module.exports = mongoose.model('Drink', drinkSchema);

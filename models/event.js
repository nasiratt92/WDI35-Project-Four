const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
  name: String,
  city: String,
  location: String,
  description: String,
  date: Date,
  drink: {type: mongoose.Schema.ObjectId, ref: 'Drink'}
});




module.exports = mongoose.model('Event', eventSchema);

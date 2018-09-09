const mongoose = require('mongoose');

const eventSchema = new mongoose.String({
  location: String,
  date: Date,
  drink:
  {type: mongoose.Schema.ObjectId, ref: 'Drink'}
});




module.export = mongoose.model('Event', eventSchema);

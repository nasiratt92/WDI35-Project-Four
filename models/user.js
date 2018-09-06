const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: String,
  email: {type: String, required: true, unique: true, match: [/.\w+@\w{3,}\.\w{2,}$/]},
  password: String,
  city: String
});
// A plugin used to throw errors if email is not unique
userSchema.plugin(require('mongoose-unique-validator'));


module.exports = mongoose.model('User', userSchema);

const mongoose = require('mongoose');

const University = new mongoose.Schema({
  name: String,
  city: String,
  country: String,
  subjects: [String],
});

module.exports = mongoose.model('University', University);

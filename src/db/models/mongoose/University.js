const mongoose = require('mongoose');

const University = new mongoose.Schema({
  name: String,
  city: String,
  country: String,
  subjects: [String],
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('University', University);

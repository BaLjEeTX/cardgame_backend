const mongoose = require('mongoose');

const PlayerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true, // Each player name must be unique
    trim: true,
    uppercase: true // Store names in uppercase to avoid case-sensitivity issues
  },
  losses: {
    type: Number,
    required: true,
    default: 0 // A new player starts with 0 losses
  }
});

module.exports = mongoose.model('Player', PlayerSchema);
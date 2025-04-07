const mongoose = require('mongoose');

const gameSchema = new mongoose.Schema({
  homeTeam: {
    type: String,
    required: true
  },
  awayTeam: {
    type: String,
    required: true
  },
  odds: {
    home: {
      type: Number,
      required: true
    },
    draw: {
      type: Number,
      required: true
    },
    away: {
      type: Number,
      required: true
    }
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Game', gameSchema);

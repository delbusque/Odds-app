const express = require('express');
const router = express.Router();
const Game = require('../models/Game');

// Get all games
router.get('/', async (req, res) => {
  try {
    const games = await Game.find().sort({ date: -1 });
    res.json(games);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Add a new game
router.post('/', async (req, res) => {
  const game = new Game({
    homeTeam: req.body.homeTeam,
    awayTeam: req.body.awayTeam,
    odds: {
      home: req.body.odds.home,
      draw: req.body.odds.draw,
      away: req.body.odds.away
    }
  });

  try {
    const newGame = await game.save();
    res.status(201).json(newGame);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;

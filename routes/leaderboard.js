const express = require('express');
const router = express.Router();
const Player = require('../models/Player');

// @route   GET /leaderboard
// @desc    Get all players, sorted by losses (Hall of Shame)
router.get('/', async (req, res) => {
  try {
    const players = await Player.find().sort({ losses: -1 }); // -1 for descending order
    res.json(players);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   POST /leaderboard/loss
// @desc    Record a loss for a player
router.post('/loss', async (req, res) => {
  const { name } = req.body;

  if (!name) {
    return res.status(400).json({ msg: 'Player name is required' });
  }

  try {
    // Find the player by name and increment their losses by 1.
    // If the player doesn't exist, create them with 1 loss.
    const player = await Player.findOneAndUpdate(
      { name: name.toUpperCase() },
      { $inc: { losses: 1 } },
      { new: true, upsert: true } // new: returns the updated doc, upsert: creates it if not found
    );
    res.json(player);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   DELETE /leaderboard
// @desc    Clear the entire leaderboard
router.delete('/', async (req, res) => {
  try {
    await Player.deleteMany({});
    res.json({ msg: 'Leaderboard cleared' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
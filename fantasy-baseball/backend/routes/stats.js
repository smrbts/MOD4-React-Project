const express = require('express');
const router = express.Router();

const Stats = require('../models/Stats')

router.get('/', (req,res) => {
  Stats.findAll()
    .then(stats => res.json(stats))
})

router.get('/:player_id', (req,res) => {
  Stats.findAll({where: {playerId:req.params.player_id} })
  .then(stats => res.json(stats))
})

module.exports = router;

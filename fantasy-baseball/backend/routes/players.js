const express = require('express');
const router = express.Router();

const Players = require('../models/Players')

router.get('/', async (req,res) => {
  Players.findAll()
    .then(players => res.json(players))
  })

router.get('/:id', (req,res) => {
  Players.findByPk(req.params.id)
    .then(player => res.json(player))
})

module.exports = router;

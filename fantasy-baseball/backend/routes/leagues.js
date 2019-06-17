const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');

const Leagues = require('../models/Leagues')

router.get('/', (req,res) => {
  Leagues.findAll()
    .then(leagues => res.json(leagues))
})

router.get('/:id', (req,res) => {
  Leagues.findByPk(req.params.id)
    .then(league => res.json(league))
})

router.post('/', auth, (req,res) => {
  Leagues.create({...req.body, userId:req.user.id})
    .then(league => res.json(league))
    .catch(err => res.status(404).json({ success: false }));
})

router.patch('/:id', auth, (req,res) => {
  Leagues.findByPk(req.params.id)
    .then(league => req.user.id === league.id ? league.update(req.body) : res.status(401).json({ success: false }))
    .then(league => res.json(league))
    .catch(err => res.status(404).json({ success: false }));
})

router.delete('/:id', auth, async (req,res) => {
  Leagues.findByPk(req.params.id)
  .then(league => req.user.id === league.id ? league.destroy() : res.status(401).json({ success: false }))
    .then(() => res.json({ success: true }))
    .catch(err => res.status(404).json({ success: false }));
})

module.exports = router;

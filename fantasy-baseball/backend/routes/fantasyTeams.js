const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');

const FantasyTeams = require('../models/FantasyTeams')

//Fantasy Teams Server
router.get('/', auth, (req,res) => {
  FantasyTeams.findAll({where: {userId:req.user.id} })
    .then(teams => res.json(teams))
})

router.get('/all', (req,res) => {
  FantasyTeams.findAll()
    .then(teams => res.json(teams))
})

router.get('/:id', auth, (req,res) => {
  FantasyTeams.findByPk(req.params.id)
    .then(team =>req.user.id == team.userId ? res.json(team) : res.status(401).json({ success: false}))
    .catch(err => res.status(404).json({ success: false }))
})

router.post('/', auth, (req,res) => {
  FantasyTeams.create({...req.body, userId:req.user.id})
    .then(team => res.json(team))
})

router.patch('/:id', auth, (req,res) => {
  FantasyTeams.findByPk(req.params.id)
    .then(team => req.user.id === team.userId ? team.update(req.body) : res.status(401).json({ success: false }))
    .then(team => res.json(team))
    .catch(err => res.status(404).json({ success: false }));
})

router.delete('/:id', auth, async (req,res) => {
  FantasyTeams.findByPk(req.params.id)
    .then(team => req.user.id === team.userId ? team.destroy() : res.status(401).json({ success: false }))
    .then(() => res.json({ success: true }))
    .catch(err => res.status(404).json({ success: false }));
})

module.exports = router;

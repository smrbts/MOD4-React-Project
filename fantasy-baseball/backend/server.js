const express = require('express')
const bodyParser = require('body-parser')
const pry = require('pryjs')
const cors = require ('cors')
const Stats = require ('./models/Stats')
const Players = require('./models/Players')
const FantasyTeams = require('./models/FantasyTeams')
const Users = require('./models/Users')
const Leagues = require('./models/Leagues')

const app = express()

app.use(bodyParser.json())
app.use(cors())

Stats.belongsTo(Players)
Players.hasMany(Stats)

Players.belongsTo(FantasyTeams)
FantasyTeams.hasMany(Players)

FantasyTeams.belongsTo(Leagues)
Leagues.hasMany(FantasyTeams)

Users.hasMany(FantasyTeams)
FantasyTeams.belongsTo(Users)

//Stats Server
app.get('/stats', (req,res) => {
  Stats.findAll()
    .then(stats => res.json(stats))
})

//Players Server
app.get('/players', async (req,res) => {
  Players.findAll()
    .then(players => res.json(players))
  })

app.get('/players/:id', (req,res) => {
  Players.findByPk(req.params.id)
    .then(player => res.json(player))
})

//Fantasy Teams Server
app.get('/fantasyteams', (req,res) => {
  FantasyTeams.findAll()
    .then(teams => res.json(teams))
})

app.get('/fantasyteams/:id', (req,res) => {
  FantasyTeams.findByPk(req.params.id)
    .then(team => res.json(team))
})

app.post('/fantasyteams', (req,res) => {
  FantasyTeams.create(req.body)
    .then(team => res.json(team))
})

app.patch('/fantasyteams/:id', async (req,res) => {
  let team = await FantasyTeams.findByPk(req.params.id)
  team.update(req.body)
})

app.delete('/fantasyteams/:id', async (req,res) => {
  let team = await FantasyTeams.findByPk(req.params.id)
  painting.destroy()
})

//Fantasy League Server
app.get('/leagues', (req,res) => {
  Leagues.findAll()
    .then(leagues => res.json(leagues))
})

app.get('/leagues/:id', (req,res) => {
  Leagues.findByPk(req.params.id)
    .then(league => res.json(league))
})

app.post('/leagues', (req,res) => {
  Leagues.create(req.body)
    .then(league => res.json(league))
})

app.patch('/leagues/:id', async (req,res) => {
  let league = await Leagues.findByPk(req.params.id)
  league.update(req.body)
})

app.delete('/leagues/:id', async (req,res) => {
  let league = await Leagues.findByPk(req.params.id)
  league.destroy()
})

//Users Server - Stretch
app.get('/users', (req,res) => {
  Users.findAll()
    .then(users => res.json(users))
})

app.get('/users/:id', (req,res) => {
  Users.findByPk(req.params.id)
    .then(user => res.json(user))
})

app.post('/users', (req,res) => {
  Users.create(req.body)
    .then(user => res.json(user))
})

app.patch('/users/:id', async (req,res) => {
  let user = await Users.findByPk(req.params.id)
  user.update(req.body)
})

app.delete('/users/:id', async (req,res) => {
  let user = await Users.findByPk(req.params.id)
  user.destroy()
})

//Listener Port 6969 - Because Justin is a Child
const port = 6969
app.listen(port,() => {console.log(`I am listening at ${port}`)})

const express = require('express')
const bodyParser = require('body-parser')
const pry = require('pryjs')
const cors = require ('cors')
const Stats = require ('./models/Stats')
const Players = require('./models/Players')
// const FantasyTeams = require('./models/fantasy-team')
// const Users = require('./models/users')
// const League = require('./models/league')

const app = express()

app.use(bodyParser.json())
app.use(cors())

Stats.belongsTo(Players)
Players.hasMany(Stats)

// Players.hasOne(FantasyTeams)
// FantasyTeams.hasMany(Players)
//
// FantasyTeams.hasOne(League)
// League.hasMany(FantasyTeams)
//
// User.hasMany(FantasyTeams)
// FantasyTeams.hasOne(User)

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

// //Fantasy Teams Server
// app.get('/fantasyteams', (req,res) => {
//   FantasyTeams.findAll()
//     .then(teams => res.json(teams))
// })
//
// //Fantasy League Server
// app.get('/league', (req,res) => {
//   League.findAll()
//     .then(league => res.json(league))
// })
//
// //Users Server - Stretch
// app.get('/users', (req,res) => {
//   Users.findAll()
//     .then(users => res.json(users))
// })

//Listener Port 6969 - Because Justin is a Child
const port = 6969
app.listen(port,() => {console.log(`I am listening at ${port}`)})

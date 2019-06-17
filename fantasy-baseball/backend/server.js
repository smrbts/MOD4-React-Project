const express = require('express')
const cors = require ('cors')
const Stats = require ('./models/Stats')
const Players = require('./models/Players')
const FantasyTeams = require('./models/FantasyTeams')
const Users = require('./models/Users')
const Leagues = require('./models/Leagues')

const app = express()

app.use(express.json())
app.use(cors())

Stats.belongsTo(Players)
Players.hasMany(Stats)

Players.belongsTo(FantasyTeams)
FantasyTeams.hasMany(Players)

FantasyTeams.belongsTo(Leagues)
Leagues.hasMany(FantasyTeams)

Users.hasMany(FantasyTeams)
FantasyTeams.belongsTo(Users)


// Use Routes
app.use('/teams', require('./routes/fantasyTeams'));
app.use('/leagues', require('./routes/leagues'));
app.use('/players', require('./routes/players'));
app.use('/stats', require('./routes/stats'));
app.use('/users', require('./routes/users'));
app.use('/auth', require('./routes/auth'));


//Listener Port 6969 - Because Justin is a Child
const port = 6969
app.listen(port,() => {console.log(`I am listening at ${port}`)})

//require the model file
const Stats = require('./models/Stats')
const Players = require('./models/Players')
// const FantasyTeams = require('./models/fantasy-team')
// const League = require('./models/league')
// const Users = require('./models/users')

Stats.sync()
Players.sync()
// FantasyTeams.sync()
// League.sync()
// Users.sync()

//create seed data for Stats
const stats = [
    {
        "playerId": 493316,
        "career": false,
        "start": "2017-12-12T00:00:00",
        "end": "2017-01-01T00:00:00",
        "h": 85, //singles
        "d": 17, //dobules
        "t": 2, //triples
        "hr": 17, //homeruns
        "r": 46, //runs
        "rbi": 42, //RBI
        "bb": 26, //Walks
        "sb": 0, //StolenBase
        "cs": 1, //Caught Stealing
        "avg": 0.292, //batting average
        "p_w": 1, //Pitcher - Wins
        "p_k": 34, //Pitcher - strikeouts (so)
        "p_era": 10, //Pitcher - Earned Runs Allowed (er)
        "p_hwa": 32//Pitcher - Hits + Walks Allowed (bb + h)
    },
]
stats.forEach(stat => Stats.create(stat))

//create seed data for players
const players = [
    {
        "id": 493316,
        "team_name":"New York Mets",
        "name_display_first_last": "Yoenis Cespedes",
        "primary_position_txt":"LF",
        "age": 32,
        "jersey_number":52,
        "primary_stat_type":"hitting",
    },
]
players.forEach(player => Players.create(player))


//seed data using 'node seeds.js'

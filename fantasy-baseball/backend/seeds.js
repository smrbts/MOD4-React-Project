//require the model file
const Stats = require('./models/Stats')
const Players = require('./models/Players')
const FantasyTeams = require('./models/FantasyTeams')
const Leagues = require('./models/Leagues')
const Users = require('./models/users')

Stats.sync()
Players.sync()
FantasyTeams.sync()
Leagues.sync()
Users.sync()

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
        "fantasyTeamId": 1,
        "team_name":"New York Mets",
        "name_display_first_last": "Yoenis Cespedes",
        "primary_position_txt":"LF",
        "age": 32,
        "jersey_number":52,
        "primary_stat_type":"hitting",
    },
]
players.forEach(player => Players.create(player))

//create seed data for Fantasy Teams
const fantasyTeam = [
    {
        "id": 1,
        "userId": 1,
        "leagueId": 1,
        "teamName": "The Houston Hashtronauts",
        "imgURL": "https://spacecenter.org/wp-content/uploads/2013/04/astronaut_main_bg.jpg",
        "pitcher": null,
        "catcher": null,
        "firstBase": null,
        "secondBase": null,
        "thirdBase": null,
        "shortStop": null,
        "leftField": 493316,
        "centerField": null,
        "rightField": null,
        "bench1": null,
        "bench1": null,
        "bench3": null
    }
]
fantasyTeam.forEach(team => FantasyTeams.create(team))

const leagues = [
    {
        "id": 1,
        "userId": 1,
        "leagueName": "Default League",
        "imageURL": "https://a2.espncdn.com/combiner/i?img=%2Fi%2Fespn%2Fmisc_logos%2F500%2Fflb.png",
        "description": "This is a League for Winners. Clearly."
    }
]
leagues.forEach(team => Leagues.create(team))

const users = [
    {
        "id": 1,
        "username": "SamTheMan",
        "password": "FluffyDuck",
        "first_name": "Sam",
        "last_name": "Man",
        "bio": "My middle name is 'The'"
    }
]
users.forEach(user => Users.create(user))

//seed data using 'node seeds.js'

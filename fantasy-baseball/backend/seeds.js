//require the model file
const Stats = require('./models/Stats')
const Players = require('./models/Players')
const FantasyTeams = require('./models/FantasyTeams')
const Leagues = require('./models/Leagues')
const Users = require('./models/users')

const d = new Date ()
const BASE_URL = 'http://lookup-service-prod.mlb.com'
const TEAMS_URL = `${BASE_URL}/json/named.team_all_season.bam?sport_code='mlb'&all_star_sw='N'&sort_order=name_asc&season='${d.getFullYear()}'`
const PLAYER_ROSTER_URL = (teamID) => `${BASE_URL}/json/named.roster_40.bam?team_id='${teamID}'`
const CAREER_HITTING_STATS_URL = (playerID) => `${BASE_URL}/json/named.sport_career_hitting.bam?league_list_id='mlb'&game_type='R'&player_id='${playerID}'`
const CAREER_PITCHING_STATS_URL = (playerID) => `${BASE_URL}/json/named.sport_career_pitching.bam?league_list_id='mlb'&game_type='R'&player_id='${playerID}'`
const SEASON_HITTING_STATS_URL = (playerID) => `${BASE_URL}/json/named.sport_hitting_tm.bam?league_list_id='mlb'&game_type='R'&season='${d.getFullYear()}'&player_id='${playerID}'`
const SEASON_PITCHING_STATS_URL = (playerID) => `${BASE_URL}/json/named.sport_pitching_tm.bam?league_list_id='mlb'&game_type='R'&season='${d.getFullYear()}'&player_id='${playerID}'`

Stats.sync()
Players.sync()
FantasyTeams.sync()
Leagues.sync()
Users.sync()

//create seed data for Stats
fetch(TEAMS_URL)
  .then(res=>res.json())
  .then(data=>{
    let teamIDs = data.team_all_season.queryResults.row.map(team => team.team_id)
    teamIDs.map((teamID)=> {
      fetch(PLAYER_ROSTER_URL(teamID))
        .then(res=>res.json())
        .then(data=>{
          let players = data.roster_40.queryResults.row
          players.map((player)=>{
            let playerOBJ = {
              id: player.player_id,
              fantasyTeamId: null,
              team_name: player.team_name,
              name_display_first_last: player.name_display_first_last,
              primary_position_txt: player.position_txt,
              age: d.getFullYear() - parseInt(player.birth_date.slice(0,4)),
              jersey_number: player.jersey_number,
              primary_stat_type: player.position_txt === "P" ? "pitching" : "hitting"
            }
            Players.create(playerOBJ)
            if (player.position_txt === "P") {
              fetch(CAREER_PITCHING_STATS_URL(player.player_id))
                .then(res=>res.json())
                .then(data=>{
                  let careerStats = data.sport_career_pitching.queryResults.row
                  let statOBJ = {
                      playerId: careerStats.player_id,
                      career: true,
                      p_w: careerStats.bb,
                      p_k: careerStats.so,
                      p_era: careerStats.era,
                      p_hwa: parseInt(careerStats.h) + parseInt(careerStats.bb)
                    }
                  Stats.create(statOBJ)
                })
                fetch(SEASON_PITCHING_STATS_URL(player.player_id))
                  .then(res=>res.json())
                  .then(data=>{
                    let careerStats = data.sport_career_pitching.queryResults.row
                    let statOBJ = {
                        playerId: careerStats.player_id,
                        career: false,
                        p_w: careerStats.bb,
                        p_k: careerStats.so,
                        p_era: careerStats.era,
                        p_hwa: parseInt(careerStats.h) + parseInt(careerStats.bb)
                      }
                    Stats.create(statOBJ)
                  })
            }
            else {
              fetch(CAREER_HITTING_STATS_URL(player.player_id))
                .then(res=>res.json())
                .then(data=>{
                  let careerStats = data.sport_career_hitting.queryResults.row
                  let statOBJ = {
                      playerId: careerStats.player_id,
                      career: true,
                      h: careerStats.h,
                      d: careerStats.d,
                      t: careerStats.t,
                      hr: careerStats.hr,
                      r: careerStats.r,
                      rbi: careerStats.rbi,
                      bb: careerStats.bb,
                      sb: careerStats.sb,
                      cs: careerStats.cs,
                      avg: careerStats.avg
                    }
                  Stats.create(statOBJ)
                })
              fetch(SEASON_HITTING_STATS_URL(player.player_id))
                .then(res=>res.json())
                .then(data=>{
                  let careerStats = data.sport_career_hitting.queryResults.row
                  let statOBJ = {
                      playerId: careerStats.player_id,
                      career: false,
                      h: careerStats.h,
                      d: careerStats.d,
                      t: careerStats.t,
                      hr: careerStats.hr,
                      r: careerStats.r,
                      rbi: careerStats.rbi,
                      bb: careerStats.bb,
                      sb: careerStats.sb,
                      cs: careerStats.cs,
                      avg: careerStats.avg
                    }
                  Stats.create(statOBJ)
                })
            }
          })
        })
    })
  })

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

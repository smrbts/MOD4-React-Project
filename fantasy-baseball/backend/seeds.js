//require the model files
const Stats = require('./models/Stats')
const Players = require('./models/Players')
const FantasyTeams = require('./models/FantasyTeams')
const Leagues = require('./models/Leagues')
const Users = require('./models/users')
const request = require('request')

process.env.UV_THREADPOOL_SIZE = 256

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

const options = (url) => {
  return({
    url: url,
    method: 'GET',
    agent: false,
    pool:{
      maxSockets: 256
    },
    timeout: 120000,
    time: true,
    json:true
  })
}

//create seed data for Players and Stats
request(options(TEAMS_URL), (error,response,body) => {
    if (error) console.log(error);
    else {
      let teamIDs = body.team_all_season.queryResults.row.map(team => team.team_id)
      teamIDs.map((teamID)=> {
        request(options(PLAYER_ROSTER_URL(teamID)), (error,response,body) => {
          if (error) console.log(error);
          let players = body.roster_40.queryResults.row
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
              request(options(CAREER_PITCHING_STATS_URL(player.player_id)), (error,response,body)=> {
                if (error) {console.log(error)}
                else {
                  if (body.sport_career_pitching.queryResults.totalSize !== '0') {
                    let stat = body.sport_career_pitching.queryResults.row
                    Stats.create({
                        playerId: stat.player_id,
                        career: true,
                        p_w: stat.bb,
                        p_k: stat.so,
                        p_era: stat.era,
                        p_hwa: parseInt(stat.h) + parseInt(stat.bb)
                      })
                  }
                }
              })
              request(options(SEASON_PITCHING_STATS_URL(player.player_id)), (error,response,body)=> {
                if (error) {console.log(error)}
                else{
                  if(body.sport_pitching_tm.queryResults.totalSize !== '0'){
                    let stat = body.sport_pitching_tm.queryResults.row
                    Stats.create({
                        playerId: stat.player_id,
                        career: false,
                        p_w: stat.bb,
                        p_k: stat.so,
                        p_era: stat.era,
                        p_hwa: parseInt(stat.h) + parseInt(stat.bb)
                      })
                  }
                }
              })
            }
            else {
              request(options(CAREER_HITTING_STATS_URL(player.player_id)), (error,response,body)=> {
                if (error) {console.log(error)}
                else {
                  if (body.sport_career_hitting.queryResults.totalSize !== '0') {
                    let stat = body.sport_career_hitting.queryResults.row
                    Stats.create({
                      playerId: stat.player_id,
                      career: true,
                      h: stat.h,
                      d: stat.d,
                      t: stat.t,
                      hr: stat.hr,
                      r: stat.r,
                      rbi: stat.rbi,
                      bb: stat.bb,
                      sb: stat.sb,
                      cs: stat.cs,
                      avg: stat.avg
                    })
                  }
                }
              })
              request(options(SEASON_HITTING_STATS_URL(player.player_id)), (error,response,body)=> {
                if (error) {console.log(error)}
                else {
                  if (body.sport_hitting_tm.queryResults.totalSize !== '0') {
                    let stat = body.sport_hitting_tm.queryResults.row
                    Stats.create({
                      playerId: stat.player_id,
                      career: false,
                      h: stat.h,
                      d: stat.d,
                      t: stat.t,
                      hr: stat.hr,
                      r: stat.r,
                      rbi: stat.rbi,
                      bb: stat.bb,
                      sb: stat.sb,
                      cs: stat.cs,
                      avg: stat.avg
                    })
                  }
                }
              })
            }
          })
        })
      })
    }
  })

//create seed data for Fantasy Teams
// const fantasyTeam = [
//     {
//         "id": 1,
//         "userId": 1,
//         "leagueId": 1,
//         "teamName": "The Houston Hashtronauts",
//         "imgURL": "https://spacecenter.org/wp-content/uploads/2013/04/astronaut_main_bg.jpg",
//         "pitcher": null,
//         "catcher": null,
//         "firstBase": null,
//         "secondBase": null,
//         "thirdBase": null,
//         "shortStop": null,
//         "leftField": 425783,
//         "centerField": null,
//         "rightField": null,
//         "bench1": null,
//         "bench1": null,
//         "bench3": null
//     }
// ]
// fantasyTeam.forEach(team => FantasyTeams.create(team))

const leagues = [
    {
        "id": 1,
        "userId": 1,
        "leagueName": "Default League",
        "imageURL": "https://media.wired.com/photos/5b899992404e112d2df1e94e/master/pass/trash2-01.jpg",
        "description": "This is a League for Winners. Clearly."
    }
]
leagues.forEach(team => Leagues.create(team))

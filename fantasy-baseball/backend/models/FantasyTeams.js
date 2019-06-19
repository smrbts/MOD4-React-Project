const Sequelize = require('sequelize')

const STRING = Sequelize.STRING
const INTEGER = Sequelize.INTEGER
const BOOLEAN = Sequelize.BOOLEAN
// const (STRING) = Sequelize (Samething but different syntax)

//Open Database Connection
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './database.sqlite'
})

//Create the Schema
const FantasyTeams = sequelize.define('fantasyTeams',{
    id:{
      type: INTEGER,
      primaryKey: true
    },
    userId: {type: INTEGER},
    leagueId: {type: INTEGER},
    teamName: {type: STRING},
    imgURL: {type: STRING},
    pitcher: {type: INTEGER},
    catcher: {type: INTEGER},
    firstBase: {type: INTEGER},
    secondBase: {type: INTEGER},
    thirdBase: {type: INTEGER},
    shortStop: {type: INTEGER},
    leftField: {type: INTEGER},
    centerField: {type: INTEGER},
    rightField: {type: INTEGER},
    bench0: {type: INTEGER},
    bench1: {type: INTEGER},
    bench2: {type: INTEGER},
    bench3: {type: INTEGER},
    bench4: {type: INTEGER}
})

module.exports = FantasyTeams

sequelize.sync()

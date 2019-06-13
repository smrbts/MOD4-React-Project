const Sequelize = require('sequelize')

const STRING = Sequelize.STRING
const INTEGER = Sequelize.INTEGER

//Open Database Connection
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './database.sqlite'
})

//Create the Schema
const Players = sequelize.define('players',{
    id: {
      type: INTEGER,
      primaryKey: true
    },
    fantasyTeamId: {type:INTEGER},
    team_name: {type: STRING},
    name_display_first_last: {type: STRING},
    primary_position_txt: {type: STRING},
    age: {type: INTEGER},
    jersey_number: {type: INTEGER},
    primary_stat_type: {type: STRING}
})

module.exports = Players

sequelize.sync()
